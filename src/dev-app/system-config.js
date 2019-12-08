/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Note that this file isn't being transpiled so we need to keep it in ES5.

var MATERIAL_PACKAGES = [
  'core',
  'button',
  'icon',
  'divider',
  'list',
  'sidenav',
  'toolbar',
];

var COMPONENTS_PACKAGES = [
  'core',
  'footer',
];

/** Bazel runfile path referring to the "src/" folder of the project. */
var srcRunfilePath = 'angular_material/src';

/** Path mappings that will be registered in SystemJS. */
var pathMapping = {};

/** Package configurations that will be used in SystemJS. */
var packagesConfig = {};

// Configure all primary entry-points.
// configureEntryPoint('material');
configureSDSEntryPoint('components');

// Configure all secondary entry-points.
// MATERIAL_PACKAGES.forEach(function(pkgName) {
//   configureEntryPoint('material', pkgName);
// });

COMPONENTS_PACKAGES.forEach(function(pkgName) {
  configureSDSEntryPoint('components', pkgName);
});

/** Configures the specified package, its entry-point and its examples. */
function configureEntryPoint(pkgName, entryPoint) {
  var name = entryPoint ? pkgName + '/' + entryPoint : pkgName;
  var examplesName = 'material-examples/' + name;

  pathMapping['@angular/' + name] = srcRunfilePath + '/' + name;
  pathMapping['@angular/' + examplesName] = srcRunfilePath + '/' + examplesName;
  packagesConfig[srcRunfilePath + '/' + name] =
      packagesConfig[srcRunfilePath + '/' + examplesName] = {main: 'index.js'};
}

console.log(pathMapping);
console.log(packagesConfig);

/** Configures the specified package, its entry-point and its examples. */
function configureSDSEntryPoint(pkgName, entryPoint) {
  var name = entryPoint ? pkgName + '/' + entryPoint : pkgName;
  var examplesName = 'examples/' + name;

  pathMapping['@gsa-sam/' + name] = srcRunfilePath + '/' + name;
  pathMapping['@gsa-sam/' + examplesName] = srcRunfilePath + '/' + examplesName;
  packagesConfig[srcRunfilePath + '/' + name] =
      packagesConfig[srcRunfilePath + '/' + examplesName] = {main: 'index.js'};
}

var map = Object.assign({
  'main': 'main.js',
  'tslib': 'tslib/tslib.js',
  'moment': 'moment/min/moment-with-locales.min.js',

  'rxjs': 'rxjs/bundles/rxjs.umd.min.js',
  'rxjs/operators': 'system-rxjs-operators.js',
}, pathMapping);

var packages = Object.assign({
  // Set the default extension for the root package, because otherwise the dev-app can't
  // be built within the production mode. Due to missing file extensions.
  '.': {defaultExtension: 'js'},

  // Angular specific mappings.
  '@angular/core': {main: 'bundles/core.umd.js'},
  '@angular/common': {main: 'bundles/common.umd.js'},
  '@angular/common/http': {main: '../bundles/common-http.umd.js'},
  '@angular/compiler': {main: 'bundles/compiler.umd.js'},
  '@angular/forms': {main: 'bundles/forms.umd.js'},
  '@angular/animations': {main: 'bundles/animations.umd.js'},
  '@angular/elements': {main: 'bundles/elements.umd.js'},
  '@angular/router': {main: 'bundles/router.umd.js'},
  '@angular/animations/browser': {main: '../bundles/animations-browser.umd.js'},
  '@angular/platform-browser/animations': {main: '../bundles/platform-browser-animations.umd'},
  '@angular/platform-browser': {main: 'bundles/platform-browser.umd.js'},
  '@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.js'},

  // CDK
  '@angular/cdk': {main: 'bundles/cdk.umd.js'},
  '@angular/cdk/a11y': {main: '../bundles/cdk-a11y.umd.js'},
  '@angular/cdk/overlay': {main: '../bundles/cdk-overlay.umd.js'},
  '@angular/cdk/platform': {main: '../bundles/cdk-platform.umd.js'},
  '@angular/cdk/scrolling': {main: '../bundles/cdk-scrolling.umd.js'},
  '@angular/cdk/coercion': {main: '../bundles/cdk-coercion.umd.js'},
  '@angular/cdk/collections': {main: '../bundles/cdk-collections.umd.js'},
  '@angular/cdk/keycodes': {main: '../bundles/cdk-keycodes.umd.js'},
  '@angular/cdk/bidi': {main: '../bundles/cdk-bidi.umd.js'},
  '@angular/cdk/portal': {main: '../bundles/cdk-portal.umd.js'},
  '@angular/cdk/observers': {main: '../bundles/cdk-observers.umd.js'},

  // MATERIAL
  '@angular/material/core': {main: '../bundles/material-core.umd.js'},
  '@angular/material/button': {main: '../bundles/material-button.umd.js'},
  '@angular/material/icon': {main: '../bundles/material-icon.umd.js'},
  '@angular/material/divider': {main: '../bundles/material-divider.umd.js'},
  '@angular/material/list': {main: '../bundles/material-list.umd.js'},
  '@angular/material/sidenav': {main: '../bundles/material-sidenav.umd.js'},
  '@angular/material/toolbar': {main: '../bundles/material-toolbar.umd.js'},
}, packagesConfig);

// Configure the base path and map the different node packages.
System.config({
  map: map,
  packages: packages
});
