import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchListSampleModule } from './feature/search-list/search-list-sample.module';
import { SearchListSampleComponent } from './feature/search-list/search-list-sample.component';

import { SearchListEventSampleComponent } from './feature/search-list-event/search-list-event-sample.component';
import { SearchListEventSampleModule } from './feature/search-list-event/search-list-event-sample.module';

import { SearchListServiceSampleComponent } from './feature/search-list-service/search-list-service-sample.component';
import { SearchListServiceSampleModule } from './feature/search-list-service/search-list-service-sample.module';

export const ROUTES: Routes = [
  { path: 'searchList', component: SearchListSampleComponent },
  { path: 'searchListEvent', component: SearchListEventSampleComponent },
  { path: 'searchListService', component: SearchListServiceSampleComponent }

];

@NgModule({
  imports: [CommonModule,
    SearchListSampleModule, SearchListEventSampleModule,
    SearchListServiceSampleModule,
    RouterModule.forChild(ROUTES)]
})
export class LayoutSampleModule { }
