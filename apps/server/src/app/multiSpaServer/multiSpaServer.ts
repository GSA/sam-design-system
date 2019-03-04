import * as express from 'express';
import * as path from 'path';
import { serveStaticFiles } from '../serveStaticFiles/serveStaticFiles';

export function multiSpaServer (routes, distDirectory) {
  const router = express.Router();

  routes.forEach((route => {
    const uri = route === '' ? '*' : `${route.route}/*`;
    router.get(uri, (req, res, next) => {
      console.log(req.route.path);
        // Initialize file server
        const serveFile = serveStaticFiles(req, res);
  
        // Check for valid file extension
        let pathname = path.resolve(distDirectory, `${route.app}/${req.path}`);
        let ext = path.extname(pathname);
  
        // If no extension found, serve index.html
        // Else, serve the static file
        if (!ext) {
          pathname = path.resolve(distDirectory, `${route.app}/index.html`);
          ext = '.html';
          serveFile(pathname, ext);
        } else {
          serveFile(pathname, ext);
        }
      })
  }));

  return router;
}