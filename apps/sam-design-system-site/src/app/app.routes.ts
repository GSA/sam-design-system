import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'component', loadChildren: () => import('@gsa-sam/component-sample').then(m => m.ComponentSampleModule) } ,
  { path: 'layout', loadChildren: () => import('@gsa-sam/layout-sample').then(m => m.LayoutSampleModule) } ,
  { path: 'formly', loadChildren: () => import('@gsa-sam/sam-formly-sample').then(m => m.SamFormlySampleModule) },
  { path: 'documentation', loadChildren: () => import('@gsa-sam/documentation').then(m => m.DocumentationModule) },
  { path: '**', redirectTo: 'documentation/overview' }

];
