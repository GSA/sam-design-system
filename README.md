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
