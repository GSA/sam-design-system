// Imports
const readFileSync = require('fs').readFileSync;
const readDirSync = require('fs').readdirSync;
const execSync = require('child_process').execSync;
const resolve = require('path').resolve;
const parseArgs = require('minimist');

main();

function main () {
  const args = parseArgs(process.argv.slice(2));
  const rootDir = resolve(__dirname, '../../');
  const angularJsonPath = resolve(__dirname, '../../angular.json');
  
  console.log('Loading angular.json...');
  const { error: angularJsonError, contents: angularJson } = loadJson(angularJsonPath);
  handleError(angularJsonError);

  const libNames = findPublishableLibs(angularJson);
  
  libNames.forEach(lib => {
    const distDir = resolve(rootDir, `dist/libs/${lib}/`);
    execSync(`ng build ${lib}`, { stdio: 'inherit' });
    execSync(`npm pack`, { cwd: distDir, stdio: 'inherit' });

    const tarballPath = findTarball(distDir);

    if (tarballPath) {
      const publishCmd = `npm publish ${tarballPath} ${args['dry-run'] ? '--dry-run' : ''}`;
      execSync(publishCmd, { cwd: distDir, stdio: 'inherit' });
    } else {
      const tarballError = new Error('No tarball found');
      tarballError.code = 1;
      handleError(tarballError);
    }
    
  });
}

function findPublishableLibs (angularJson) {
  const projectNames = Object.keys(angularJson.projects);

  const libNames = projectNames.filter(name => {
    const metadata = angularJson.projects[name];
    // Returns true if lib is a library and uses the ng-packagr schematic (indicates intent to publish)
    return metadata.projectType === 'library' 
      && metadata.architect.build;
  });

  return libNames;
}

function findTarball (directory) {
  const { error, files } = loadDir(directory);
  handleError(error);

  const tarball = files.reduce((file, next) => {
    if (next.match(/\.tgz/g)) {
      return next;
    }
    return file;
  }, '');

  return tarball;
}

function loadDir (path) {
  let error, files;

  try {
    files = readDirSync(path, 'utf-8');
  } catch (e) {
    error = e
  } 

  return { error, files }
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

function handleError (error) {
  if (error) {
    console.error(error.message);
    process.exit(error.code);
  }
}