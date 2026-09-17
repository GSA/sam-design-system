import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.env.SECURITY_SCAN_ROOT ?? 'dist/apps/sam-design-system-site/browser');
const port = Number(process.env.SECURITY_SCAN_PORT ?? 4200);
const host = process.env.SECURITY_SCAN_HOST ?? '127.0.0.1';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const securityHeaders = {
  'Content-Security-Policy':
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), geolocation=(), microphone=()',
  'Referrer-Policy': 'no-referrer',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  } catch {
    response.writeHead(400, securityHeaders).end('Bad request');
    return;
  }
  const relativePath = normalize(pathname).replace(/^[/\\]+/, '');
  let filePath = resolve(root, relativePath);
  if (!filePath.startsWith(`${root}/`) && filePath !== root) {
    response.writeHead(404, securityHeaders).end('Not found');
    return;
  }
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    const index = join(root, 'index.html');
    filePath = existsSync(index) ? index : '';
  }
  if (!filePath) {
    response.writeHead(404, securityHeaders).end('Not found');
    return;
  }
  response.writeHead(200, {
    ...securityHeaders,
    'Content-Type': contentTypes[extname(filePath)] ?? 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}).listen(port, host, () => console.log(`Security scan server listening on http://${host}:${port}`));
