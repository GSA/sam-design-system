import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const script = new URL('./serve-security-scan.mjs', import.meta.url);
const port = 4300 + Math.floor(Math.random() * 1000);
const baseUrl = `http://127.0.0.1:${port}`;
let root;
let server;

before(async () => {
  root = mkdtempSync(join(tmpdir(), 'security-server-'));
  const dist = join(root, 'dist', 'apps', 'sam-design-system-site', 'browser');
  mkdirSync(dist, { recursive: true });
  writeFileSync(join(dist, 'index.html'), '<title>SAM site</title>');
  writeFileSync(join(dist, 'main.js'), 'console.log("site")');
  server = spawn('node', [script.pathname], { cwd: root, env: { ...process.env, SECURITY_SCAN_PORT: String(port) } });
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      if ((await fetch(baseUrl)).ok) return;
    } catch {
      // The process needs a moment to bind its local port.
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error('security scan server did not start');
});

after(() => {
  server?.kill();
  rmSync(root, { recursive: true, force: true });
});

test('serves built content with security headers', async () => {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-security-policy') ?? '', /default-src 'self'/);
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
});

test('serves assets and uses the SPA fallback without exposing traversed files', async () => {
  assert.match((await fetch(`${baseUrl}/main.js`)).headers.get('content-type') ?? '', /javascript/);
  assert.match(await (await fetch(`${baseUrl}/a/client/route`)).text(), /SAM site/);
  assert.doesNotMatch(await (await fetch(`${baseUrl}/..%2f..%2fetc%2fpasswd`)).text(), /root:/);
});
