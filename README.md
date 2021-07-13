# SamDesignSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## How To Work In This Structure
To ensure your work follows the expected structure, ensure you are using the correct Angular CLI commands as you create new libraries, modules, and components.

Most of the modules in this library are intended to be published and consumed by third parties, specifically in support of the GSA IAE Modernization project.

The grouping folders under the libs folder divide libraries by scope. Packages that are intended to be published live under the packages folder. As other scopes are needed for internal development to house feature, utilities, or data-access modules for documentation or other purposes, new scope directories may be added.

## Creating New Publishable Libraries
New publishable libraries should only be created with consent from the team. These libraries should be created within the `libs/packages` directory. Each publishable package should provide the following tags:

- scope:shared
- platform:web
- type:ui

## Documentation Site Feature Modules
Any updates to the documentation site should first be created as a library in the `libs/sam-design-system-site` directory. Depending on the type of library, create it in the appropriate subdirectory using the Angular CLI schematics to ensure consistency with the project's structure.

All libraries should share the `scope:sam-design-system-site` and `platform:web` tags. Add whichever `type` tag of `ui, data-access, utility, or feature` that is appropriate.

Finally, import the module into the `sam-design-system-site` and configure the application appropriately.


## Releasing & Publishing
Publishing happens in a few steps. From a high level, 

1. Update each project package.json with latest version number
2. Run npm version to update parent package.json, commit changes, and tag
3. Push changes to github.com and create a release
4. Run github-release-notes to generate release notes
5. For every publishable lib,
     1. Build each library
     2. Create a tarball of each built lib
     3. Publish to github


### Run `npm version <major | minor | patch>`
This step updates the main package.json version in the root directory. It also runs through each library in the angular.json `projects` property and updates their package.json with the 
version from the root package.json.

Finally, this script git commits the changes and creates a tag with the version number.

### Commit changes to github `git push origin master` && `git push --tags` 
For now, this step must be run manually after the versions have been updated locally. This syncs the local changes with the remote repository.

### Create release and release notes
On Github, draft a new release and write release notes. Github-release-notes (gren) can be used to assist in this.

### Ensure local is sync'd with remote release branch && `npm run publish:libs`
Note: Run `npm run publish:libs -- --dry-run` to get a dry-run and not publish

Since the tarballs for the published libraries will be generated from the source code on the local machine, it is imperative that the branch on your local machine is in sync with the approved release code before publishing the library.

Once the local branch is in sync with the release branch, run the publish script. This finds each publishable library in the angular.json and publishes its code.

## Helper Scripts
You can now run `npm run release:patch`, `npm run release:minor`, or `npm run release:major`, but be careful. It will run the versioning script, add a commit and tag, push to github, run `gren` to generate a release on github with notes based on PRs, then run `gren` again to generate a changelog, commit it, and push it up to github.

All that executes on whatever branch you are on, and when you run it, you want to be on master. If something happens, you'll have to manually rollback 3 commits, delete the git tag, and delete the release.

Once all that is done, you still have to manually run the `npm run publish:libs` script to build, pack, and publish them to npmjs. If y'all are confident, you can also add `&& npm run publish:libs` onto the end of the `npm run release` script (for each type), and that will do everything in one step.

`Note:` I'd recommend keeping them separate for awhile and getting the team comfortable with what's happening before you try that though.

## gren (Github-release-notes)
In order to run the above, you need to have `gren` installed and configured globally on your local machine. This requires add the npm package and also updating your path with an environment variable for gren to use. 

The link to gren is [here](https://github.com/github-tools/github-release-notes). 

There is some additional configuration required to make it work smoothly. 

First, you will also need to create a personal access token with `repo` scope for your github account.

Under the Github profile, go to Settings -> Developer Settings -> Personal Access Tokens -> Generate New Token and then provide that to the environment variable to use gren.

Second, you need to add the repo information to package.json. This is already done on this project, but that keeps you from having to update `gren` with the repo info on each push.

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

## Quick Start & Documentation

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)

## Generate your first application

Run `ng generate app myapp` to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace. Read more [here](http://nrwl.io/nx).

## Development server

Run `ng serve --project=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --project=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --project=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Linking Projects to Separate Applications
Run `ng build project-name` to initially output a build of the project. This will be stored in `dist/` directory.
Navigate to the built project - `cd dist/libs/project-name`
Run `npm link` (Mac users might need to run with sudo command)
Navigate back to root directory - cd `../../../`
Run `ng build --watch` - This will watch for any changes to the project and update the build in dist directory
On application side, from the same directory where the application's package.json is placed, run `npm link @gsa-sam/project-name`.
Start up your application - Now any changes made to the project should initiate a reload and be reflected on the application.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
