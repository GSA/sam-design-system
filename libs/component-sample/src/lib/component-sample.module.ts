import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSampleComponent } from './feature/header-sample/header-sample.component';
import { FooterSampleComponent } from './feature/footer-sample/footer-sample.component';
import { FooterSampleModule } from './feature/footer-sample/footer-sample.module';
import { HeaderSampleModule } from './feature/header-sample/header-sample.module';
import { PaginationSampleComponent } from './feature/pagination-sample/pagination-sample.component';
import { PaginationSampleModule } from './feature/pagination-sample/pagination-sample.module';

export const ROUTES: Routes = [
  { path: 'header', component: HeaderSampleComponent }//,
  // { path: 'footer', component: FooterSampleComponent },
  // { path: 'pagination', component: PaginationSampleComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), 
    HeaderSampleModule//, FooterSampleModule, PaginationSampleModule
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentSampleModule { }
