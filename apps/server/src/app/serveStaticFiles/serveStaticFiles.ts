import * as fs from 'fs';
import { extMap } from '../extMap';

export function serveStaticFiles (req, res) {
  return function (pathname, ext) {
    fs.exists(pathname, function (exist) {
      if(!exist) {
        // if the file is not found, return 404
        console.log(`404 - File ${pathname} not found`);
        res.statusCode = 404;
        res.end(`File ${pathname} not found!`);
        return;
      }
  
      // read file from file system
      fs.readFile(pathname, function(err, data){
        if (err) {
          console.log(`500 - Error retrieving file ${pathname}`);
          console.log(err);
          res.statusCode = 500;
          res.send(``)
          res.end(`Error getting the file: ${err}.`);
        } else {
          // if the file is found, set Content-type and send data
          // Default content-type is text/plain
          console.log(`200 - Serving file ${pathname}`);
          res.setHeader('Content-type', extMap[ext] || 'text/plain' );
          res.end(data);
        }
      });
    });
  }
}