import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'documentation', loadChildren: () => import('@gsa-sam/documentation').then(m => m.DocumentationModule) },
  { path: '**', redirectTo: 'documentation/overview' }
];
