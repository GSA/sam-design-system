import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'component', loadChildren: '@gsa-sam/component-sample#ComponentSampleModule' } ,
  { path: 'documentation', loadChildren: '@gsa-sam/documentation#DocumentationModule' },
  { path: '**', redirectTo: 'documentation/overview' }
];
