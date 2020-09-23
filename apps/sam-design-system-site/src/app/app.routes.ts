import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '',   redirectTo: '/documentation', pathMatch: 'full' },
  { path: '**', redirectTo: '/documentation/overview' }
];
