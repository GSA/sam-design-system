const fs = require('fs-extra')
const path = require("path");
const argv = require('minimist')(process.argv.slice(2));

const filename = argv['f'];

const sourcejson = './libs/documentation/src/lib/apidoc/' + filename+ '/documentation.json';
const output = 'libs/documentation/src/lib/apidoc/' + filename + '/' + filename + '.ts';

const json = fs.readFileSync(sourcejson, 'utf8');

fs.ensureFileSync(output);
fs.writeFileSync(output, `const ${filename.toUpperCase()} = ${json};\n\nexport default ${filename.toUpperCase()};`);
