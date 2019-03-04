// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  **/
// import * as express from 'express';
// import * as path from 'path';

// import { multiSpaServer } from './app/multiSpaServer/multiSpaServer';

// const app = express();

// const distDirectory = path.resolve(__dirname, '../../../dist/apps/');
// const routes = [
//   {
//     app: 'sam-design-system-site',
//     route: '',
//   },
//   {
//     app: 'sam-design-system-site',
//     route: 'prototype'
//   }
// ]

// app.use('/', multiSpaServer(routes, distDirectory));

// const port = 3333;
// app.listen(port, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(`Listening at http://localhost:${port}`);
// });

/**
 * If pathname contains route (/route/*), 
 *   If pathname has file extension, serve file
 *   Else serve index
 * Else serve index
 */

import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';
import * as path from 'path';
import { routes } from './config/routes';
import { serveStaticFiles } from './app/serveStaticFiles/serveStaticFiles';

const port = process.env.PORT || '3000';
const distDirectory = path.resolve(__dirname, '../../../dist/apps/');

http.createServer(function (req, res) {
  const serveFile = serveStaticFiles(req, res);

  // parse URL
  let parsedUrl; 
  try {
    parsedUrl = url.parse(req.url);
  } catch (error) {
    console.error("Issue parsing url...");
    console.error(error);
  }

  // extract URL path
  let pathname = `${parsedUrl.pathname}`;

  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  let ext;
  try {
    ext = path.parse(pathname).ext;
  } catch (error) {
    console.error("Error parsing pathname...");
    console.error(error);
  }

  // maps file extention to MIME typere
  const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
  };
  
  // Serve index if route is an Angular route

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const routeMatcher = new RegExp(`^(/${route.route}).*`, 'g');
    if (route.route === '') {
      // If no extension found, serve index.html
      // Else, serve the static file
      if (!ext) {
        pathname = path.resolve(distDirectory, `${route.app}/index.html`);
        ext = '.html';
      } 
      try {
        serveFile(pathname, ext);
      } catch (e) {
        console.log(e);
      }
      break;
    } else if (routeMatcher.exec(pathname)) {
      console.log('Looking for file ' + pathname);
      // If no extension found, serve index.html
      // Else, serve the static file
      if (!ext) {
        pathname = path.resolve(distDirectory, `${route.app}/index.html`);
        ext = '.html';
      }
      try {
        serveFile(pathname, ext);
      } catch (e) {
        console.log(e);
      }
      break;
    }
  }
}).listen(parseInt(port, 10));
  
console.log(`Server listening on port ${port}`);