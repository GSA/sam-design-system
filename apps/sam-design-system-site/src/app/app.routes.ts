import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'documentation', loadChildren: '@gsa-sam/documentation#DocumentationModule' },
  { path: '**', redirectTo: 'documentation/overview' }
];
