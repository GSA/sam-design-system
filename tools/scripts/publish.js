/**
 * Steps to publish:
 * 1. Checkout master branch, pull latest from Github
 * 2. Increment root package.json version number
 * 3. Increment each package version number
 * 4. Commit, tag commit with version number, and push to github
 * 5. Generate Github release notes
 * 6. Build each package
 * 7. Pack each package
 * 8. Publish each package
 */
const branch = process.env.BRANCH || 'master';
const promisify = require('util').promisify;
const exec = promisify(require('child_process').exec);
const readFile = promisify(require('fs').readFile);
const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;

const mainPackagePath = resolve(__dirname, '../../package.json');
const angularJsonPath = resolve(__dirname, '../../angular.json');

main();

function main () {
  const { error: angularJsonError, resposne: angularJson} = loadJson(angularJsonPath); 
  const { error: packageError, response: package } = loadJson(mainPackagePath); 

  console.log(angularJson, package);
  
  process.exit(0);
}

function loadJson (path) {
  let error, response;

  try {
    response = readFileSync(path, 'utf-8');
    response = JSON.parse(response);
  } catch (e) {
    error = e;
  }

  return { error, response };
}


// Step 1: Checkout release branch and ensure its up-to-date
// function checkoutMaster () {
//   const { stdOut, stdErr } = await exec('git checkout ${branch}');
//   handleOutput(stdOut, stdErr);
// }


// Step 2: Pull latest from origin
// function pullFromOrigin () {
//   const { stdOut, stdErr } = await exec('git pull origin ${branch}');
//   handleOutput(stdOut, stdErr);
// }

function loadJson (path) {
  let error, response;

  try {
    response = readFileSync(path, 'utf-8');
    response = JSON.parse(response);
  } catch (e) {
    error = e;
  }

  return { error, response };
}


function handleOutput (stdOut, stdErr) {
  if (stdErr) {
    console.log(stdErr);
    process.exit(1);
  } else {
    console.log(stdOut);
  }
}