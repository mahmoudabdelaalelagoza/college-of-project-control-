import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { openBrowser, pause } from './lib/browser.mjs';

// Browser-only checks: external CMS requests are blocked; no forms or messages are submitted.
const project = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const origin = process.env.TYPOGRAPHY_ORIGIN || 'http://127.0.0.1:3001';
const mode = process.env.TYPOGRAPHY_MODE || 'vite';
const output = resolve(project, 'docs/audits/typography-2026-10-22/remediation');
mkdirSync(resolve(output, 'evidence'), { recursive: true });
const b = await openBrowser();
const results = [];
async function test(name, work) {
  try { const evidence = await work(); results.push({ name, passed: true, evidence }); console.log('PASS ' + name); }
  catch (error) { results.push({ name, passed: false, error: error.stack || error.message }); console.error('FAIL ' + name + ': ' + error.message); }
}
async function evaluate(fn, argument) { return b.evaluate('(' + fn.toString() + ')(' + JSON.stringify(argument) + ')'); }
async function navigate(path, width = 375, height = 900) {
  await b.cdp('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 768 });
  // The existing Next static route list excludes dashboard URLs. Exercise its
  // real client router from the exported shell; direct-link rewrites are host-owned.
  if (mode === 'next' && path.startsWith('/dashboard')) {
    await b.cdp('Page.navigate', { url: origin + '/' });
    await b.waitFor('typeof window.REACT_APP_NAVIGATE==="function"');
    await b.evaluate('window.REACT_APP_NAVIGATE(' + JSON.stringify(path) + ')');
  } else await b.cdp('Page.navigate', { url: origin + path });
  await pause(450);
  await b.waitFor('!!document.querySelector("h1")&&!document.querySelector(".page-loader")');
  await b.evaluate('document.fonts.ready');
  await pause(200);
}
async function fonts(selector) {
  const { root } = await b.cdp('DOM.getDocument');
  const { nodeId } = await b.cdp('DOM.querySelector', { nodeId: root.nodeId, selector });
  assert.ok(nodeId, 'Missing font target: ' + selector);
  return (await b.cdp('CSS.getPlatformFontsForNode', { nodeId })).fonts;
}
async function shot(name) {
  const capture = await b.cdp('Page.captureScreenshot', { format: 'png' });
  writeFileSync(resolve(output, 'evidence', mode + '-' + name + '.png'), Buffer.from(capture.data, 'base64'));
}
async function contrast(selector, placeholder = false) {
  return evaluate(({ selector, placeholder }) => {
    const e = document.querySelector(selector); if (!e) throw Error('Missing contrast target ' + selector);
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rgba = color => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = color; ctx.fillRect(0, 0, 1, 1); const c = [...ctx.getImageData(0, 0, 1, 1).data]; c[3] /= 255; return c; };
    const over = (a, z) => [0, 1, 2].map(i => a[i] * a[3] + z[i] * (1 - a[3])).concat(1);
    const lum = c => { const v = c.slice(0, 3).map(x => { x /= 255; return x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4; }); return v[0] * .2126 + v[1] * .7152 + v[2] * .0722; };
    const ancestors = []; for (let p = e; p; p = p.parentElement) ancestors.unshift(p);
    let bg = [255, 255, 255, 1];
    for (const p of ancestors) bg = over(rgba(getComputedStyle(p).backgroundColor), bg);
    const style = getComputedStyle(e, placeholder ? '::placeholder' : null), fg = over(rgba(style.color), bg);
    const ratio = (Math.max(lum(fg), lum(bg)) + .05) / (Math.min(lum(fg), lum(bg)) + .05);
    return { text: placeholder ? e.getAttribute('placeholder') : e.textContent.trim().slice(0, 100), size: style.fontSize, foreground: fg.slice(0, 3), background: bg.slice(0, 3), ratio };
  }, { selector, placeholder });
}
async function readable(selector, placeholder) {
  const result = await contrast(selector, placeholder); assert.ok(result.ratio >= 4.5, JSON.stringify(result)); return result;
}
const spacing = () => { const s = document.createElement('style'); s.id = 'typography-spacing-test'; s.textContent = '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}'; document.head.append(s); };
try {
  await b.cdp('Network.setBlockedURLs', { urls: ['*supabase.co/*', '*googletagmanager.com/*', '*zohopublic.com/*', '*fonts.googleapis.com/*', '*fonts.gstatic.com/*'] });
  await b.cdp('DOM.enable'); await b.cdp('CSS.enable');
  for (const width of [375, 768, 1440]) await test('T01 actual brand faces ' + width, async () => {
    await navigate('/about', width);
    const heading = await fonts('h1'), body = await fonts('p');
    assert.ok(heading.some(f => f.isCustomFont && f.familyName === 'Source Serif 4'));
    assert.ok(body.some(f => f.isCustomFont && f.familyName.startsWith('Poppins')));
    const weight = await b.evaluate('getComputedStyle(document.querySelector("h1")).fontWeight');
    assert.equal(weight, width === 375 ? '900' : '800');
    return { heading, body, weight };
  });
  await test('T02 contact outline normal hover focus', async () => {
    await navigate('/contact');
    const normal = await readable('.cta-button--on-dark');
    const { root } = await b.cdp('DOM.getDocument');
    const { nodeId } = await b.cdp('DOM.querySelector', { nodeId: root.nodeId, selector: '.cta-button--on-dark' });
    const states = [];
    for (const state of ['hover', 'focus-visible']) {
      await b.cdp('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: [state] });
      await pause(300); states.push({ state, ...await readable('.cta-button--on-dark') });
    }
    await shot('contact-375');
    return { normal, states, disabled: 'Not applicable: navigation anchor; no disabled behavior changed.' };
  });
  for (const [path, selector, label] of [
    ['/short-courses', 'span.text-warm-ink', 'shared warm label'],
    ['/project-controls-professional/engineering-manufacturing-aerospace-route', '#value .text-warm-ink', 'engineering eyebrow'],
    ['/programmes', 'span.text-warm-ink', 'programme label'],
    ['/testimonials', 'p.text-warm-ink', 'community label'],
    ['/commercial-project-controls-route', '#commercial-recognition-heading + p + p + div > p:last-child', 'recognition conditions'],
    ['/governance-board', '#commitment > div > p', 'board renewal'],
    ['/route-finder', 'section.py-8 p', 'funding conditions'],
    ['/privacy', 'main p.text-foreground-600', 'legal support'],
    ['/knowledge-hub', '.cta-button--on-dark', 'hub outline action'],
    ['/apprentices', 'p.text-support-on-dark', 'apprentice support'],
    ['/project-controls-professional/strategic-operational-route', 'div.font-label.text-foreground-600 > span', 'chart labels'],
    ['/project-controls-professional/construction-route', 'span.text-support-on-dark', 'workflow labels'],
  ]) await test('T03/T04 ' + label, async () => { await navigate(path); const result = await readable(selector); if (['shared warm label', 'engineering eyebrow'].includes(label)) { await evaluate(selector => document.querySelector(selector).scrollIntoView({block:'center'}), selector); await pause(150); await shot(label.replaceAll(' ', '-')); } return result; });
  for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1920]) await test('T05 header text spacing ' + width, async () => {
    await navigate('/about', width); await evaluate(spacing); await pause(250);
    const state = await b.evaluate('(()=>{const a=document.querySelector(".public-navigation__booking"),r=a.getBoundingClientRect(),h=a.closest("header").getBoundingClientRect();return {width:r.width,height:r.height,top:r.top,bottom:r.bottom,headerBottom:h.bottom,overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth)}})()');
    assert.ok(state.overflow <= 1);
    if (width >= 1280) { assert.ok(state.height >= 40 && state.height <= 80); assert.ok(state.top >= 0 && state.bottom <= state.headerBottom + 1); }
    if (width === 1280) {
      await shot('header-spacing-1280');
      await b.evaluate('[...document.querySelectorAll("[data-navigation-control]")].find(e=>e.textContent.includes("Professional study")).click()');
      await pause(250);
      const menu = await b.evaluate('(()=>{const m=document.querySelector("[data-navigation-menu]").getBoundingClientRect(),h=document.querySelector("header").getBoundingClientRect();return {top:m.top,headerBottom:h.bottom}})()');
      assert.ok(menu.top >= menu.headerBottom - 2, JSON.stringify(menu)); state.dropdown = menu;
    } else if (width < 1280) {
      await b.evaluate('document.querySelector("[aria-label=\\"Toggle menu\\"]").click()'); await pause(200);
      assert.equal(await b.evaluate('Boolean(document.querySelector("dialog.mobile-navigation[open]"))'), true);
      await b.cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 });
      await b.cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 }); await pause(150);
      assert.equal(await b.evaluate('document.activeElement?.getAttribute("aria-label")'), 'Toggle menu');
    }
    return state;
  });
  await test('T05 funding notice remains visible at 200% root text', async () => {
    await navigate('/about', 320);
    await b.evaluate('document.documentElement.style.fontSize="200%"'); await pause(200);
    const bounds = await evaluate(() => { const a = document.querySelector('[data-public-site].fixed a[href="#check-eligibility"]'), r = a.getBoundingClientRect(), p = a.parentElement.getBoundingClientRect(); return { textTop: r.top, textBottom: r.bottom, parentTop: p.top, parentBottom: p.bottom, overflow: Math.max(0, document.documentElement.scrollWidth - innerWidth) }; });
    assert.ok(bounds.textTop >= bounds.parentTop && bounds.textBottom <= bounds.parentBottom);
    assert.ok(bounds.overflow <= 1); await shot('ticker-root-200-320'); return bounds;
  });
  for (const path of ['/apprentices', '/commercial-project-controls-route', '/campaign/construction', '/campaign/energy', '/campaign/public-sector', '/campaign/head-of-pmo', '/campaign/hr-employer']) await test('T06 heading outline ' + path, async () => {
    await navigate(path);
    const jumps = await b.evaluate('(()=>{const h=[...document.querySelectorAll("#main-content h1,#main-content h2,#main-content h3,#main-content h4,#main-content h5")].filter(e=>e.getClientRects().length&&!e.closest(".sr-only"));return h.flatMap((e,i)=>i&&Number(e.tagName[1])>Number(h[i-1].tagName[1])+1?[{from:h[i-1].tagName,to:e.tagName,text:e.textContent.trim()}]:[])})()');
    assert.deepEqual(jumps, []); return { jumps };
  });
  await test('T07 explicit section role preserves optical size', async () => {
    await navigate('/');
    const size = await b.evaluate('getComputedStyle(document.querySelector("h2.text-section-2xl")).fontSize');
    assert.ok(Math.abs(parseFloat(size) - 22.32) < .02, size); return { size };
  });
  await test('T08/T10 learner metadata search disclosure and long name', async () => {
    await navigate('/testimonials');
    await b.waitFor('Boolean(document.querySelector(".experience-card__programme"))');
    const values = await b.evaluate('Object.fromEntries(["programme","source"].map(role=>[role,getComputedStyle(document.querySelector(".experience-card__"+role)).fontSize]))');
    assert.deepEqual(values, { programme: '13px', source: '13px' });
    const placeholder = await readable('.experience-filters input', true);
    await b.evaluate('document.querySelector(".experience-card__programme").scrollIntoView({block:"center"})'); await pause(150); await shot('learner-metadata-375');
    await b.evaluate('document.querySelector(".experience-card__more").click()'); await pause(150);
    assert.equal(await b.evaluate('document.querySelector(".experience-card__more").getAttribute("aria-expanded")'), 'true');
    assert.equal(await b.evaluate('getComputedStyle(document.querySelector(".experience-card__text")).webkitLineClamp'), 'none');
    const longName = await b.evaluate('(()=>{const e=document.querySelector(".experience-card__name");e.textContent="Professor Alexandra-Christina Montgomery-Williams";return {width:e.clientWidth,scroll:e.scrollWidth}})()');
    assert.ok(longName.scroll <= longName.width + 1); return { values, placeholder, expanded: true, longName, fixture: 'Temporary DOM only' };
  });
  await test('T10 login placeholder and password visibility', async () => {
    await navigate('/dashboard/login');
    const placeholder = await readable('#username', true);
    await b.evaluate('document.querySelector("[aria-label=\\"Show password\\"]").click()');
    assert.equal(await b.evaluate('document.querySelector("#password").type'), 'text'); return placeholder;
  });
  for (const width of [320, 375, 1440]) await test('T09 chat scaling and scroll access ' + width, async () => {
    await navigate('/about', width);
    await b.evaluate('document.querySelector(".assistant-launcher").click()'); await pause(250);
    const initial = await b.evaluate('getComputedStyle(document.querySelector(".assistant-privacy")).fontSize');
    assert.equal(initial, '13px'); if (width === 375) await shot('chat-375');
    await b.evaluate('document.documentElement.style.fontSize="200%"'); await pause(300);
    const state = await b.evaluate('(()=>{const p=document.querySelector(".assistant-panel"),e=document.querySelector(".assistant-privacy");e.scrollIntoView({block:"nearest"});const r=e.getBoundingClientRect(),q=p.getBoundingClientRect();return {privacySize:getComputedStyle(e).fontSize,panel:{left:q.left,right:q.right,top:q.top,bottom:q.bottom},privacy:{top:r.top,bottom:r.bottom},pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),panelOverflow:p.scrollWidth-p.clientWidth}})()');
    assert.equal(state.privacySize, '26px'); assert.ok(state.panelOverflow <= 1 && state.pageOverflow <= 1);
    assert.ok(state.panel.left >= 0 && state.panel.right <= width + 1);
    assert.ok(state.privacy.top >= state.panel.top - 1 && state.privacy.bottom <= state.panel.bottom + 1);
    await shot('chat-root-200-' + width);
    await b.cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 });
    await b.cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 }); await pause(100);
    assert.equal(await b.evaluate('document.activeElement?.classList.contains("assistant-launcher")'), true);
    return { initial, ...state, scaling: 'Root-font override, not native browser zoom' };
  });
  await test('T11 genuine italic quote', async () => {
    await navigate('/campaign/construction');
    const actual = await fonts('blockquote');
    assert.ok(actual.some(f => f.isCustomFont && f.postScriptName.toLowerCase().includes('italic')), JSON.stringify(actual)); return actual;
  });
  await test('T12 single shared serif family', async () => {
    await navigate('/');
    const families = await b.evaluate('[...new Set([...document.fonts].filter(f=>f.family.includes("Serif")||f.family.includes("Mobile")).map(f=>f.family))]');
    assert.deepEqual(families, ['Source Serif 4']); return families;
  });
  await test('Portal font faces and keyboard focus return', async () => {
    await navigate('/');
    await b.evaluate('[...document.querySelectorAll("button")].find(e=>e.textContent.trim()==="Check Eligibility").focus()');
    await b.evaluate('document.activeElement.click()'); await pause(300);
    await b.waitFor('Boolean(document.querySelector("#home-eligibility-modal[open]"))');
    await b.evaluate('document.fonts.ready');
    const actual = await fonts('#home-eligibility-modal h2');
    assert.ok(actual.some(f => f.isCustomFont && f.familyName === 'Source Serif 4'));
    await shot('eligibility-375');
    await b.cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 });
    await b.cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 }); await pause(150);
    assert.equal(await b.evaluate('document.activeElement.textContent.trim()'), 'Check Eligibility'); return { actual, focusReturned: true };
  });
  for (const path of ['/associate-project-manager-level-4', '/project-controls-professional-level-6', '/project-controls-professional/strategic-route']) await test('Sticky header clearance ' + path, async () => {
    await navigate(path, 1280); await evaluate(spacing); await pause(200);
    const state = await b.evaluate('(()=>{const n=document.querySelector("nav[aria-label$=\\"page sections\\"]");if(!n)return {missing:true};scrollTo(0,n.getBoundingClientRect().top+scrollY+600);return {}})()');
    assert.ok(!state.missing); await pause(300);
    const bounds = await b.evaluate('(()=>{const n=document.querySelector("nav[aria-label$=\\"page sections\\"]").getBoundingClientRect();const h=document.querySelector("[data-public-site].fixed").getBoundingClientRect();return {top:n.top,headerBottom:h.bottom,headerHeight:getComputedStyle(document.documentElement).getPropertyValue("--public-header-height")}})()');
    assert.ok(bounds.top >= bounds.headerBottom - 1, JSON.stringify(bounds)); return bounds;
  });
  const exceptions = b.events.filter(e => e.method === 'Runtime.exceptionThrown').map(e => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text);
  await test('No runtime exceptions or hydration errors', async () => {
    assert.deepEqual(exceptions, []);
    const hydration = b.events.filter(e => e.method === 'Runtime.consoleAPICalled' && /hydration|hydrating|did not match/i.test(JSON.stringify(e.params)));
    assert.deepEqual(hydration, []); return { runtimeExceptions: exceptions.length, hydrationErrors: hydration.length };
  });
} finally {
  await b.close();
  const report = { mode, origin, passed: results.filter(r => r.passed).length, failed: results.filter(r => !r.passed).length, results };
  writeFileSync(resolve(output, mode + '-targeted-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ mode, passed: report.passed, failed: report.failed }));
  if (report.failed) process.exitCode = 1;
}

