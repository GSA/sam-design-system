# Contributing to SAM.gov Design System

This document describes how to contribute and provide examples for new components.

- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Packages](#packages)
- [Scripts](#scripts)
- [Tools](#tools)
- [Configuration](#configuration)


## Project Structure
High level file structure and notable file locations.

   ```
   sam-design-system
   ├── apps
   │   ├── sam-design-system-site-e2e
   │   └── sam-design-system-site
   ├── dist
   ├── libs
   │   ├── documentation
   │   └── packages
   ├── node_modules
   ├── scripts
   │   └── generate-docs.js
   ├── tools
   │   └── scripts
   |       ├── pack-and-publish.js
   │       └── update-libs-version.js
   ├── angular.json
   ├── CODEOWNERS
   ├── karma.conf.js
   ├── nx.json
   ├── package-lock.json
   ├── package.json
   ├── tsconfig.json
   └── tslint.json
   ```

## Application
The sample application in sam-design-system is a very basic angular application which consists of the header, side navigation, and a `router-outlet`. The documentation library is lazy loaded and rendered through the app component `router-outlet`.

## Documentation
High level file structure for the documentation library.

   ```
   documentation/src/lib
   ├── apidoc
   │   ├── sam-design-system-site-e2e
   │   └── sam-design-system-site
   ├── components
   │   ├── example-component
   |   |   ├── demos
   |   |   |   ├── basic
   |   |   |   |   ├── example-component-basic.component.html
   |   |   |   |   ├── example-component-basic.component.scss
   |   |   |   |   ├── example-component-basic.component.ts
   |   |   |   |   ├── example-component-basic.module.ts
   |   |   |   |   └── readme.md
   |   |   |   └── advanced
   |   |   |       ├── example-component-advanced.component.html
   |   |   |       ├── example-component-advanced.component.scss
   |   |   |       ├── example-component-advanced.component.ts
   |   |   |       ├── example-component-advanced.module.ts
   |   |   |       └── readme.md
   |   |   ├── opening.md
   |   |   ├── example-component.module.ts
   |   |   └── closing.md
   │   └── shared
   ├── pages
   │   ├── introduction
   │   └── overview
   ├── shared
   │   ├── component-wrapper
   │   ├── highlight
   │   └── index.ts
   └── documentation.module.js
   ```

### Apidoc
The `apidoc` folder contains the exported documentation of `compodoc` which is triggered from `npm run demo:docs` which is part of the federalist build process.
- `components/components.ts` &rarr; Components documentation
- `formly/formly.ts` &rarr; Formly compodoc documentation
- `layouts/layouts.ts` &rarr; Layout compodoc documentation
- `index.ts` &rarr; Combined export file for all compodoc documentation. Prefer to import this as opposed to individual files.

### Components
The `components` folder contains all demonstrable components and a `shared` folder which contains helpers.
> ### Example Component (basic)
> - `demos/basic/example-component-basic.component.html` &rarr; The html template file for the basic example.
> - `demos/basic/example-component-basic.component.scss` &rarr; The css file for the basic example.
> - `demos/basic/example-component-basic.component.ts` &rarr; The typescript component file for the basic example.
> - `demos/basic/example-component-basic.module.ts` &rarr; The typescript module file for the basic example.
> - `demos/basic/readme.md` &rarr; A description markdown file for the basic example. `(optional)`
> - `opening.md` &rarr; A markdown file that is being ingested and passed through the route data `readme.opening` attribute to be shown between the title and the tab navigation. `(optional)`
> - `example-component.module.ts` &rarr; The overall example-component module which is responsible for registering each `demo` example, providing the routing for each tab, and pulling in any markdown information. `(see below)`
> - `closing.md` &rarr; A markdown file that is being ingested and passed through the route data `readme.closing` attribute to be shown beneath all of the demos. `(optional) `
>
> <br />
>
> `example-component.module.ts` <br />
> The customizable configurations contain comments below.
>
>  ```js
> import { NgModule } from '@angular/core';
> import { CommonModule } from '@angular/common';
> import { HeaderBasic } from './demos/basic/header-basic.component';
> import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
> import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
> import { DocumentationSourcePage } from '../shared/source-page/source.component';
> import { DocumentationTemplatePage } from '../shared/template-page/template.component';
> import {
>   DocumentationComponentsSharedModule,
>   DocumentationDemoList
> } from './../shared/index';
> import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
> import { HeaderBasicModule } from './demos/basic/header-basic.module';
>
> export declare var require: any;
>
> export const opening = require('!!raw-loader!./opening.md'); // load the content of the markdown in to a variable
> export const closing = require('!!raw-loader!./closing.md'); // load the content of the markdown in to a variable
>
> const DEMOS = {
>   basic: {
>     title: 'SAM Header', // Provide a title for this demo
>     type: HeaderBasic, // Component to use for this demo
>     code: require('!!raw-loader!./demos/basic/header-basic.component'), // Source Tab Content
>     markup: require('!!raw-loader!./demos/basic/header-basic.component.html'), // Template Tab Content
>     readme: require('!!raw-loader!./demos/basic/readme.md'), // Demo description markdown
>     path: 'libs/documentation/src/lib/components/header/demos/basic' // Path to demo for the Github link
>   }
> };
>
> export const ROUTES = [
>   { path: '', pathMatch: 'full', redirectTo: 'examples' },
>   {
>     path: '',
>     component: ComponentWrapperComponent,
>     data: {
>       readme: {
>         opening, // Opening section markdown (imported with require above)
>         closing  // Closing section markdown (imported with require above)
>       },
>       items: [ // Defines what documentation to display on the API tab, repeats if multiple are specified
>         {
>           pkg: 'components', // Package specifies which compodocs to use (/apidocs/components/components.ts)
>           type: 'components', // Within the compodocs, target the components section
>           name: 'SdsHeaderComponent' // Show the SdsHeaderComponent object for API information
>         }
>       ]
>     },
>     children: [ // You can omit any tab sections by removing the child routes here
>       { path: 'examples', component: DocumentationExamplesPage },
>       { path: 'api', component: DocumentationAPIPage },
>       { path: 'source', component: DocumentationSourcePage },
>       { path: 'template', component: DocumentationTemplatePage }
>     ]
>   }
> ];
>
> @NgModule({
>   imports: [
>     CommonModule,
>     DocumentationComponentsSharedModule,
>     HeaderBasicModule // Import all of your demo modules here (basic, advanced, etc)
>   ]
> })
> export class HeaderModule {
>   constructor(demoList: DocumentationDemoList) {
>     demoList.register('header', DEMOS); // Register the component with the demo list (name must match the route name)
>   }
> }
>
>  ```
><br/><br/>

> ### Shared
> The `shared` folder within components facilitates displaying the `examples`, `api`, `source`, and `template` page content.
><br/><br/>

### Pages
The `pages` folder holds any informational pages like `introduction` or `overview` that do not need to be part of the demo component structure.

### Shared
> ### Component Wrapper
> The overall component for each component. It is responsible for the following:
> - `title` &rarr; An optional attribute of the route data, if it's not provided it will default to the component name.
> - `introducedVersion` &rarr; An optional attribute of the route data which will show up at a chip to indicate what version the component was added to SDS.
> - `deprecatedVersion` &rarr; An optional attribute of the route data which will show up at a chip to indicate when the component was added to SDS
> - `opening` &rarr; A markdown string that is shown between the title and the tab navigation.
> - `closing` &rarr; A markdown string that is shown beneath all of the demos.
>
> If the demo component's module provides child routes for `examples`, `api`, `source`, or `template`, they will be displayed as tabs.
><br/><br/>


> ### Highlight
> A component for displaying source code with `ngx-highlightjs` on the demo card.
><br/><br/>

### Documentation Module
The overall library documentation module is where we register all of the example demo modules and routes.

> `documentation.module.ts` <br />
> For each example, you must import your module and routes to the documentation module.
>
>  ```js
> import { IntroductionModule } from './pages/introduction/introduction.module';
> import { IntroductionComponent } from './pages/introduction/introduction.component';
> import { OverviewModule } from './pages/overview/overview.module';
> import { NgModule } from '@angular/core';
> import { CommonModule } from '@angular/common';
> import { RouterModule, Routes } from '@angular/router';
> import { library } from '@fortawesome/fontawesome-svg-core';
> import { sds } from '@gsa-sam/sam-styles/src/icons/';
> import { fas } from '@fortawesome/free-solid-svg-icons';
> import { DocumentationSharedModule } from './shared';
> import { OverviewComponent } from './pages/overview/overview.component';
>
> import { ROUTES as HEADER_ROUTES, HeaderModule } from './components/header/header.module'; // Import your ROUTES and Module
>
>
> declare var require: any;
>
> export const ROUTES: Routes = [
>   { path: '', pathMatch: 'full', redirectTo: 'components/header' },
>   { path: 'overview', component: OverviewComponent },
>   { path: 'introduction', component: IntroductionComponent },
>   { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
>   { path: 'components/header', children: HEADER_ROUTES }, // Add your example component routes (the last segment should match the registered demo list name)
>
> ];
>
> @NgModule({
>   imports: [
>     CommonModule,
>     DocumentationSharedModule,
>     RouterModule.forChild(ROUTES),
>     HeaderModule, // Add your example component module to the imports array
>     OverviewModule,
>     IntroductionModule,
>   ]
> })
> export class DocumentationModule {
>   constructor() {
>     library.add(fas, sds);
>   }
> }
>
> ```


## Packages
   ```
   packages
   ├── components
   ├── experimental
   ├── layouts
   ├── sam-formly
   └── sam-material-extension
   ```
- `components` &rarr; Common components and directives
- `experimental` &rarr; Experimental components [No Support Provided]
- `layouts` &rarr; Layout components which orchestrate multiple common components together
- `sam-formly` &rarr; Form controls and supporting components built on `ngx-formly`
- `sam-material-extension` &rarr; Angular Material related components

## Scripts
- `generate-docs.js` &rarr; Automates creating `compodoc` documentation for a specific library and exports it for use in the documentation.

## Tools
- `pack-and-publsh.js` &rarr; Automates | `npm build` | `npm pack` | `npm publish` | process
- `update-libs-version.js` &rarr; Automates bumping of libraries `package.json` version

## Configuration
- `angular.json` &rarr; Angular CLI configuration
- `CODEOWNERS` &rarr; Github pull request approvers
- `karma.conf.js` &rarr; Karma test runner framework configuration
- `nx.json` &rarr; NX Workspace monorepo configuration and dependency tagging
- `package-lock.json` &rarr; Pre-processsed project dependencies
- `package.json` &rarr; Project version, dependencies, and scripts
- `tsconfig.json` &rarr; Typescript configuration
- `tslint.json` &rarr; Typescript linter configuration
