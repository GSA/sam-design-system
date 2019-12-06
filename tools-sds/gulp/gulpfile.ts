import {task} from 'gulp';
import {createPackageBuildTasks, sequenceTask} from 'material2-build-tools';
import {
  allBuildPackages,
  componentsPackage,
} from './packages';

createPackageBuildTasks(componentsPackage);

import '../../tools/gulp/tasks/ci';
import '../../tools/gulp/tasks/clean';
import '../../tools/gulp/tasks/default';
import '../../tools/gulp/tasks/example-module';
import '../../tools/gulp/tasks/lint';
import '../../tools/gulp/tasks/unit-test';

/** Task that builds all available release packages. */
task('build-release-packages', sequenceTask(
  'clean',
  allBuildPackages.map(buildPackage => `${buildPackage.name}:build-release`)
));
