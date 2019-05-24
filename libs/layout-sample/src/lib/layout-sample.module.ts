import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchListSampleModule } from './feature/search-list/search-list-sample.module';
import { SearchListSampleComponent } from './feature/search-list/search-list-sample.component';

export const ROUTES: Routes = [
  { path: 'searchList', component: SearchListSampleComponent }
];

@NgModule({
  imports: [CommonModule,
    SearchListSampleModule,
    RouterModule.forChild(ROUTES)]
})
export class LayoutSampleModule { }
