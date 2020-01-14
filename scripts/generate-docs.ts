import * as glob from 'glob';
import {ensureFileSync, writeFileSync} from 'fs-extra';

/**
 * Extracts documentation from all ng-bootstrap sources to a single TS file
 * used by the demo application
 */

const file = 'demo/src/api-docs.ts';

const json = JSON.stringify(parseOutApiDocs(fileNames), null, 2);

ensureFileSync(file);
writeFileSync(file, `const API_DOCS = ${json};\n\nexport default API_DOCS;`);
