// /**
//  * Steps to publish:
//  * 1. Checkout master branch, pull latest from Github
//  * 2. Increment root package.json version number
//  * 3. Increment each package version number
//  * 4. Commit, tag commit with version number, and push to github
//  * 5. Generate Github release notes
//  * 6. Build each package
//  * 7. Pack each package
//  * 8. Publish each package
//  */
// const project = process.env.PROJECT;
// const branch = process.env.BRANCH || 'master';
// const promisify = require('util').promisify;
// const exec = promisify(require('child_process').exec);
// const readFile = promisify(require('fs').readFile);
// const readFileSync = require('fs').readFileSync;
// const resolve = require('path').resolve;

// const mainPackagePath = resolve(__dirname, '../../package.json');
// const angularJsonPath = resolve(__dirname, '../../angular.json');

// main();

// function main () {
//   const { error: angularJsonError, resposne: angularJson} = loadJson(angularJsonPath); 
//   const { error: packageError, response: package } = loadJson(mainPackagePath); 

//   console.log(angularJson, package);
  
//   process.exit(0);
// }

// function loadJson (path) {
//   let error, response;

//   try {
//     response = readFileSync(path, 'utf-8');
//     response = JSON.parse(response);
//   } catch (e) {
//     error = e;
//   }

//   return { error, response };
// }


// // Step 1: Checkout release branch and ensure its up-to-date
// // function checkoutMaster () {
// //   const { stdOut, stdErr } = await exec('git checkout ${branch}');
// //   handleOutput(stdOut, stdErr);
// // }


// // Step 2: Pull latest from origin
// // function pullFromOrigin () {
// //   const { stdOut, stdErr } = await exec('git pull origin ${branch}');
// //   handleOutput(stdOut, stdErr);
// // }

// function loadJson (path) {
//   let error, response;

//   try {
//     response = readFileSync(path, 'utf-8');
//     response = JSON.parse(response);
//   } catch (e) {
//     error = e;
//   }

//   return { error, response };
// }


// function handleOutput (stdOut, stdErr) {
//   if (stdErr) {
//     console.log(stdErr);
//     process.exit(1);
//   } else {
//     console.log(stdOut);
//   }
// }

// Imports
const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;
const execSync = require('child_process').execSync;

const parseArgs = require('minimist');
const OptionsBuilder = require('./options-builder');

// CLI Options and Types
const cliOptions = {
  'angular-json': 'string',
  'dry-run': 'boolean',
  'package-json': 'string',
  'root-dir': 'string',
  'verion': 'string'
}

const defaultCliOptions = {
  angularJson: resolve(__dirname, '../../angular.json'),
  packageJson: resolve(__dirname, '../../package.json'),
  rootDir: resolve(__dirname, '../../'),
  dryRun: false
}

main(process.argv, defaultCliOptions);

function main (cliArgs, defaultCliOptions) {
  const args = transformArgs(cliArgs);
  const validationError = validateArgs(args);

  if (validationError) {
    return consoleErrorAndExit(validationError);
  }

  const options = configureOptions(args, defaultCliOptions);

  const { error: angularJsonError,
          contents: angularJson,
          getProjectInfo } = loadAngularJson(options.angularJson);

  if (angularJsonError) {
    return consoleErrorAndExit(angularJsonError);
  }
  
  const projectInfo = getProjectInfo(options.projectName);

  const nextVersion = bumpVersion(options.version, resolve(options.rootDir, projectInfo.root))
  commitVersion(nextVersion);
  
}

function bumpVersion (version, directory) {
  console.log('Bumping version...')
  const versionNumber = execSync(`npm versasdfadsfion ${version}`, { cwd: directory, encoding: 'utf-8' });
  console.log(versionNumber)
  return versionNumber;
}

function commitVersion (version, directory) {
  execSync(`git add . && git commit -m "Update library to version ${version}"`, { cwd: directory, stdio: 'inherit' });
}


function consoleErrorAndExit (error) {
  console.error(error.message);
  console.error(error);
  process.exit(error.code);
}

function transformArgs (cliArgs) {
  return parseArgs(cliArgs.slice(2));
}

function configureOptions (args, defaults) {
  const optionsBuilder = new OptionsBuilder(defaults);

  if (args['angular-json']) {
    optionsBuilder.addAngularJson(args['angular-json']);
  }

  if (args['package-json']) {
    optionsBuilder.addPackageJson(args['package-json']);
  }

  if (args['dry-run']) {
    optionsBuilder.setDryRun(args['dry-run']);
  }

  if (args['root-dir']) {
    optionsBuilder.setRootDir(args['root-dir']);
  }

  if (args['version']) {
    optionsBuilder.setVersion(args['version']);
  }

  if (args._.length > 0) {
    optionsBuilder.setProjectName(args._[0]);
  }
  
  return optionsBuilder.build();
}


function validateArgs (args) {
  let validationError;

  if (args._) {
    if (args._.length === 0) {
      validationError = new Error('Must provide project name as first argument');
      validationError.code = 1;
    } else if (args._.length > 1) {
      validationError = new Error(`Unknown arguments ${args._.slice(1).join(' ')}`);
      validationError.code = 1;
    }
  }

  return validationError;
}

function loadAngularJson (path) {
  const { error, contents } = loadJson(path);
  return {
    error: error,
    contents: contents,
    getProjectInfo: (projectName) => contents.projects[projectName]
  }
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
