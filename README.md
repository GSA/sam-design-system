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
Publishing happens in a few steps

### Run `npm publish <major | minor | patch>`
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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
