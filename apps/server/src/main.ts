/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import * as express from 'express';
import * as path from 'path';

import { multiSpaServer } from './app/multiSpaServer/multiSpaServer';

const app = express();

const distDirectory = path.resolve(__dirname, '../../../dist/apps/');
const routes = [
  {
    app: 'sam-design-system-site',
    route: '',
  },
  {
    app: 'sam-design-system-site',
    route: 'prototype'
  }
]

app.use('/', multiSpaServer(routes, distDirectory));

const port = 3333;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});

