import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSampleComponent } from './feature/header-sample/header-sample.component';
import { HeaderSampleModule } from './feature/header-sample/header-sample.module';

export const ROUTES: Routes = [
  { path: 'header', component: HeaderSampleComponent }
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), HeaderSampleModule],
  exports: [
    RouterModule
  ]
})
export class ComponentSampleModule { }
