import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'component', loadChildren: '@gsa-sam/component-sample#ComponentSampleModule' } ,
  { path: 'layout', loadChildren: '@gsa-sam/layout-sample#LayoutSampleModule' } 

];
