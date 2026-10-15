import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { openBrowser, pause } from './lib/browser.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let fixture, server, browser, baseUrl;

// Exercise the real React editors with an in-memory CMS. No account or database writes.
const harness = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { cmsApi } from '/src/dashboard/api/client';
import MentorsPage from '/src/dashboard/pages/MentorsPage';
import ShortCoursesPage from '/src/dashboard/pages/ShortCoursesPage';
const kind = new URLSearchParams(location.search).get('kind');
const mentor = {id:1,name:'Existing mentor',initials:'EM',role_title:'Mentor',affiliation:'',specialties:'Planning',biography:'Existing biography',image:null,image_url:'',linkedin_url:'',order:0,is_active:true};
const course = {id:1,slug:'existing-course',title:'Existing course',category:'Controls',duration:'4 months',format:'Online',owner:'',audience:'Professionals',summary:'Original summary',focus:['Planning'],detail:{},icon:'ri-book-open-line',image_url:'',order:10,is_active:true};
window.cms = { rows: [kind === 'mentors' ? mentor : course], writes: [], failNext: false, errors: [] };
window.addEventListener('cms-request-error', event => window.cms.errors.push(event.detail));
cmsApi.get = async () => structuredClone(window.cms.rows);
const write = async (method, path, body) => {
  const payload = body instanceof FormData ? Object.fromEntries(body) : structuredClone(body);
  window.cms.writes.push({method,path,payload});
  await new Promise(resolve => setTimeout(resolve, 80));
  if (window.cms.failNext) { window.cms.failNext = false; throw new Error('Simulated save failure'); }
  const id = method === 'POST' ? 100 + window.cms.rows.length : Number(path.split('/')[2]);
  const row = {...(window.cms.rows.find(row => row.id === id) || {}),...payload,id};
  window.cms.rows = [...window.cms.rows.filter(row => row.id !== id),row];
  return structuredClone(row);
};
cmsApi.post = (path, body) => write('POST', path, body);
cmsApi.patch = (path, body) => write('PATCH', path, body);
cmsApi.del = () => { throw new Error('Unexpected delete'); };
createRoot(document.getElementById('root')).render(React.createElement(kind === 'mentors' ? MentorsPage : ShortCoursesPage));
`;

before(async () => {
  await mkdir(join(root, '.codex_tmp'), { recursive: true });
  fixture = await mkdtemp(join(root, '.codex_tmp', 'dashboard-drafts-'));
  await writeFile(join(fixture, 'index.html'), '<!doctype html><html><body><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>');
  await writeFile(join(fixture, 'main.jsx'), harness);
  server = await createServer({ configFile: false, root, envDir: fixture, plugins: [react()], resolve: { alias: { '@': join(root, 'src') } }, logLevel: 'error', server: { host: '127.0.0.1', port: 0, open: false, watch: null } });
  await server.listen();
  baseUrl = `http://127.0.0.1:${server.httpServer.address().port}/${relative(root, fixture).split(sep).join('/')}/index.html`;
  browser = await openBrowser();
  await browser.cdp('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
});

after(async () => {
  await browser?.close();
  await server?.close();
  if (fixture && dirname(fixture) === join(root, '.codex_tmp')) await rm(fixture, { recursive: true, force: true });
});

const dialog = 'document.querySelector("dialog[open], [role=dialog]")';
const state = () => browser.evaluate('window.cms');
const clickText = async text => {
  await browser.evaluate(`(() => { const button = [...document.querySelectorAll('button')].find(button => button.textContent.trim() === ${JSON.stringify(text)}); if (!button) throw new Error('Button missing'); button.click(); })()`);
  await pause(100);
};
const close = async kind => {
  await browser.evaluate(`document.querySelector(${JSON.stringify(kind === 'mentors' ? 'button[aria-label="Close"]' : 'button[aria-label="Close editor"]')}).click()`);
  await browser.waitFor(`!${dialog}`);
};
const fill = async (prefix, value) => {
  await browser.evaluate(`(() => { const input = document.querySelector('input[id^="${prefix}-"]'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, ${JSON.stringify(value)}); input.dispatchEvent(new Event('input', {bubbles:true})); })()`);
  await pause(50);
};
const escape = async () => {
  await browser.cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await browser.cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await browser.waitFor(`!${dialog}`);
};

for (const kind of ['mentors', 'short-courses']) {
  test(`${kind}: closing new drafts never creates a record; Save creates once and later edits update it`, async () => {
    await browser.cdp('Page.navigate', { url: `${baseUrl}?kind=${kind}` });
    await browser.waitFor('!!window.cms && !document.body.textContent.includes("Loading")');
    const add = kind === 'mentors' ? '+ Add Mentor' : 'Add course';
    const save = kind === 'mentors' ? 'Save Mentor' : 'Save course';
    const field = kind === 'mentors' ? 'name' : 'title';
    await clickText(add);
    await browser.waitFor(`!!${dialog}`);
    assert.equal((await state()).writes.length, 0, 'Add must not persist anything');
    await fill(field, 'Discard this draft');
    await close(kind);
    assert.equal((await state()).rows.length, 1);
    assert.equal((await state()).writes.length, 0, 'Close must not save or delete a placeholder');

    await clickText(add);
    assert.notEqual(await browser.evaluate(`document.querySelector('input[id^="${field}-"]').value`), 'Discard this draft');
    await fill(field, 'Discard by Escape');
    await escape();
    assert.equal((await state()).writes.length, 0);

    await clickText(add);
    await fill(field, 'Saved new item');
    await clickText(save);
    await browser.waitFor('window.cms.rows.length === 2');
    let cms = await state();
    assert.equal(cms.writes.length, 1);
    assert.equal(cms.writes[0].method, 'POST');
    assert.equal(cms.writes[0].path, `/${kind}/`);
    assert.equal(cms.writes[0].payload[field], 'Saved new item');
    assert.equal('id' in cms.writes[0].payload, false);
    if (kind === 'short-courses') await close(kind);
    else await browser.waitFor(`!${dialog}`);

    await browser.evaluate(`(() => { const item = [...document.querySelectorAll(${JSON.stringify(kind === 'mentors' ? 'button' : 'article')})].find(item => item.textContent.includes('Saved new item')); ${kind === 'mentors' ? 'item.click()' : "[...item.querySelectorAll('button')].find(button=>button.textContent.trim()==='Edit').click()"}; })()`);
    await browser.waitFor(`!!${dialog}`);
    await fill(field, 'Unsaved edit');
    await close(kind);
    assert.equal((await state()).rows.find(row => row.id !== 1)[field], 'Saved new item');
    assert.equal((await state()).writes.length, 1);

    await browser.evaluate(`(() => { const item = [...document.querySelectorAll(${JSON.stringify(kind === 'mentors' ? 'button' : 'article')})].find(item => item.textContent.includes('Saved new item')); ${kind === 'mentors' ? 'item.click()' : "[...item.querySelectorAll('button')].find(button=>button.textContent.trim()==='Edit').click()"}; })()`);
    await fill(field, 'Updated item');
    await clickText(save);
    await browser.waitFor(`window.cms.rows.some(row => row.${field} === 'Updated item')`);
    cms = await state();
    assert.equal(cms.rows.length, 2);
    assert.equal(cms.writes.length, 2);
    assert.equal(cms.writes[1].method, 'PATCH');
    assert.equal(cms.writes[1].path, `/${kind}/101/`);
    if (kind === 'short-courses') await close(kind);
    else await browser.waitFor(`!${dialog}`);

    await clickText(add);
    await fill(field, 'Retry this draft');
    await browser.evaluate('window.cms.failNext = true');
    await clickText(save);
    await browser.waitFor('window.cms.errors.length === 1');
    assert.ok(await browser.evaluate(`!!${dialog}`));
    assert.equal(await browser.evaluate(`document.querySelector('input[id^="${field}-"]').value`), 'Retry this draft');
    assert.equal((await state()).rows.length, 2);
    await clickText(save);
    await browser.waitFor('window.cms.rows.length === 3');
    assert.equal((await state()).writes.filter(write => write.method === 'POST').length, 3, 'One successful create, one failed attempt and one retry');
    if (kind === 'short-courses') await close(kind);
    else await browser.waitFor(`!${dialog}`);
  });
}
