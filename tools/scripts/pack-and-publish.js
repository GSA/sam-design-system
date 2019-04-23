// Imports
const readFileSync = require('fs').readFileSync;
const readDirSync = require('fs').readdirSync;
const execSync = require('child_process').execSync;
const resolve = require('path').resolve;

main();

function main () {
  const rootDir = resolve(__dirname, '../../');
  const angularJsonPath = resolve(__dirname, '../../angular.json');
  
  console.log('Loading angular.json...');
  const { error: angularJsonError, contents: angularJson } = loadJson(angularJsonPath);
  handleError(angularJsonError);

  const projectNames = Object.keys(angularJson.projects);
  const libNames = projectNames.filter(name => angularJson.projects[name].projectType === 'library');
  
  libNames.forEach(lib => {
    const distDir = resolve(rootDir, `dist/libs/${lib}/`);
    execSync(`ng build ${lib}`, { stdio: 'inherit' });
    execSync(`npm pack`, { cwd: distDir, stdio: 'inherit' });

    const tarBallPath = findTarball(distDir);
    if (tarBallPath) {
      execSync(`npm publish ${tarBallPath} --dry-run`, { cwd: distDir, stdio: 'inherit' });
    } else {
      const tarballError = new Error('No tarball found');
      tarballError.code = 1;
      handleError(tarballError);
    }
  });
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