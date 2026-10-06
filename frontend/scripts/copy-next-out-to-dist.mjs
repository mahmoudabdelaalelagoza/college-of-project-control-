import { copyFileSync, cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const exportCandidates = ['out', '.next-build'].map((dir) => resolve(dir));
const exportDir = exportCandidates.find((dir) => existsSync(resolve(dir, 'index.html')));
const distDir = resolve('dist');
const publicHtaccess = resolve('public', '.htaccess');

if (!exportDir) {
  throw new Error('Next static export output folder was not found. Run next build first.');
}

rmSync(distDir, { recursive: true, force: true });
cpSync(exportDir, distDir, { recursive: true });
if (existsSync(publicHtaccess)) copyFileSync(publicHtaccess, resolve(distDir, '.htaccess'));
console.log(`Copied Next static export from ${exportDir} to dist/ for Hostinger.`);