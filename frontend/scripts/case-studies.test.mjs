import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import ts from 'typescript';
const records = JSON.parse(fs.readFileSync('src/data/pcpCaseStudies.json', 'utf8'));
const { outputText } = ts.transpileModule(fs.readFileSync('src/services/caseStudyCollection.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { buildCaseStudyPage } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));

test('the five supplied stories have production paths and only available portraits', () => {
  assert.deepEqual(new Set(records.map(item => item.learner_name)), new Set(['Elizabeth Pardoe', 'Lucian Moraru', 'James Molloy', 'Tim White', 'Roy Hillson']));
  assert.equal(new Set(records.map(item => item.slug)).size, 5);
  const routes = fs.readFileSync('src/next/staticRoutes.ts', 'utf8');
  for (const item of records) {
    assert.ok(routes.includes('/case-studies/' + item.slug));
    assert.ok(item.quote && item.source_note && item.challenge && item.approach && item.outcome);
    assert.deepEqual(item.metrics, []);
    for (const file of [item.image_url, item.employer_logo_url].filter(Boolean)) assert.ok(fs.existsSync(path.join('public', file)), file);
  }
  assert.equal(records.filter(item => item.image_url).length, 2);
  assert.ok(records.find(item => item.learner_name === 'Tim White').outcome.includes('not yet reporting a specific achievement or measured impact'));
  const publicData = JSON.stringify(records);
  assert.doesNotMatch(publicData, /@|phone|dietary|safeguarding|reimbursement|special educational|Webhook|referrername|\.pdf/i);
});

test('editorial and real CMS stories merge without duplicates or placeholder content', () => {
  const additional = { ...records[0], id: 30, learner_name: undefined, slug: 'latest-infrastructure-story', title: 'Latest infrastructure learning' };
  const placeholder = { ...additional, id: 31, slug: 'demo-case-study', title: 'Demo case study' };
  const data = buildCaseStudyPage(records, [{ ...records[0], title: 'Duplicated CMS record' }, additional, placeholder]);
  assert.equal(data.count, 6);
  assert.equal(data.results[0].title, records[0].title);
  assert.ok(data.results.some(item => item.slug === additional.slug));
  assert.ok(!data.results.some(item => item.slug === placeholder.slug));
});

test('search spans learners, employers and applied learning while respecting sector filters', () => {
  assert.equal(buildCaseStudyPage(records, [], { search: '  ELIZABETH  ' }).results[0].learner_name, 'Elizabeth Pardoe');
  assert.equal(buildCaseStudyPage(records, [], { search: 'Barhale' }).results[0].learner_name, 'Lucian Moraru');
  assert.ok(buildCaseStudyPage(records, [], { search: 'precedence diagram' }).results.some(item => item.learner_name === 'Elizabeth Pardoe'));
  assert.equal(buildCaseStudyPage(records, [], { sector: 'Professional services' }).count, 2);
  assert.equal(buildCaseStudyPage(records, [], { search: 'Tim', sector: 'Aviation' }).count, 0);
});

test('pagination counts the merged collection and invalid sizes cannot hide the first page', () => {
  const first = buildCaseStudyPage(records, [], { page: 1, pageSize: 2 });
  const second = buildCaseStudyPage(records, [], { page: 2, pageSize: 2 });
  assert.equal(first.count, 5); assert.equal(first.next, '2'); assert.equal(first.previous, null);
  assert.equal(second.results.length, 2); assert.equal(second.previous, '1'); assert.equal(second.next, '3');
  assert.equal(buildCaseStudyPage(records, [], { page: 3, pageSize: 2 }).next, null);
  assert.ok(buildCaseStudyPage(records, [], { page: -1, pageSize: 0 }).results.length > 0);
});
