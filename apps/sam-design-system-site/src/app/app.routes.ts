import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'component', loadChildren: '@gsa-sam/component-sample#ComponentSampleModule' } ,
  { path: 'layout', loadChildren: '@gsa-sam/layout-sample#LayoutSampleModule' } ,
  { path: 'formly', loadChildren: '@gsa-sam/sam-formly-sample#SamFormlySampleModule' },
  { path: 'documentation', loadChildren: '@gsa-sam/documentation#DocumentationModule' }

];
