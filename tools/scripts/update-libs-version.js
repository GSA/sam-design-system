// Imports
const readFileSync = require('fs').readFileSync;
const writeFileSync = require('fs').writeFileSync;
const resolve = require('path').resolve;

main();

function main () {
  const rootDir = resolve(__dirname, '../../');
  const angularJsonPath = resolve(__dirname, '../../angular.json');
  
  console.log('Loading angular.json...');
  const { error: angularJsonError, contents: angularJson } = loadJson(angularJsonPath);
  handleError(angularJsonError);

  const projectNames = Object.keys(angularJson.projects);
  const libNames = projectNames.filter(name => angularJson.projects[name].projectType === 'library' && angularJson.projects[name].architect.build);
  
  console.log('Bumping lib versions...');
  libNames.forEach(lib => {
    const libRootDir = angularJson.projects[lib].root;
    const libPackagePath = resolve(rootDir, libRootDir, 'package.json')

    console.log(`Loading ${lib} package...`);
    const { error: libPackageError, contents: libPackage } = loadJson(libPackagePath);
    handleError(libPackageError);

    const updatedPackage = updatePackageVersion(libPackage);

    console.log(`Writing version bump for ${lib} package...`);
    const { error, contents } = writeJson(libPackagePath, updatedPackage);
    handleError(error);
    console.log(`Successfully bumped ${lib}!`);
  });
}

function updatePackageVersion (packageJson) {
  const clone = Object.assign({}, packageJson);

  clone.version = process.env.npm_package_version;

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