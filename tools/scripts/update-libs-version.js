// Imports
const readFileSync = require('fs').readFileSync;
const writeFileSync = require('fs').writeFileSync;
const resolve = require('path').resolve;
const parseArgs = require('minimist');

main();

function main () {
  const version = getVersion(parseArgs(process.argv.slice(2)));
  const rootDir = resolve(__dirname, '../../');
  const angularJsonPath = resolve(__dirname, '../../angular.json');
  
  console.log('Loading angular.json...');
  const { error: angularJsonError, contents: angularJson } = loadJson(angularJsonPath);
  handleError(angularJsonError);

  const projectNames = Object.keys(angularJson.projects);
  const libNames = projectNames.filter(name => angularJson.projects[name].projectType === 'library');
  
  console.log('Bumping lib versions...');
  libNames.forEach(lib => {
    const libRootDir = angularJson.projects[lib].root;
    const libPackagePath = resolve(rootDir, libRootDir, 'package.json')

    console.log(`Loading ${lib} package...`);
    const { error: libPackageError, contents: libPackage } = loadJson(libPackagePath);
    handleError(libPackageError);

    const updatedPackage = updatePackageVersion(libPackage, version);

    console.log(`Writing version bump for ${lib} package...`);
    const { error, contents } = writeJson(libPackagePath, updatedPackage);
    handleError(error);
    console.log(`Successfully bumped ${lib}!`);
  });
}

function getVersion (args) {
  return args['lib-version'];
}

function updatePackageVersion (packageJson, version) {
  const clone = Object.assign({}, packageJson);
  const versionArray = clone.version.split('.');

  switch (version) {
    case 'major':
      versionArray[0]++;
      break;
    case 'minor':
      versionArray[1]++;
      break;
    case 'patch':
      versionArray[2]++;
      break;
    default:
      break;
  }

  clone.version = versionArray.join('.');

  return clone;
}

function loadJson (path) {
  let error, contents;

  try {
    contents = readFileSync(path, 'utf-8');
    contents = JSON.parse(contents);
  } catch (e) {
    error = new Error(e);
    error.code = 1;
  }

  return { error, contents };
}

function writeJson (path, json) {
  let error, value;

  try {
    const value = writeFileSync(path, JSON.stringify(json, null, 2));
  } catch (e) {
    error = new Error(e);
    error.code = 1;
  }

  return { error, value };
}

function handleError (error) {
  if (error) {
    console.error(error.message);
    process.exit(error.code);
  }
}