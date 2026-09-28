import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const projectDir = resolve(import.meta.dirname, '..');
const outputDir = resolve(projectDir, '../../docs/presentacions/unitat-1-html');

rmSync(outputDir, { force: true, recursive: true });
mkdirSync(outputDir, { recursive: true });

execFileSync(
  'npx',
  ['slidev', 'build', 'slides.md', '--out', outputDir, '--base', './', '--router-mode', 'hash'],
  { cwd: projectDir, stdio: 'inherit' },
);
