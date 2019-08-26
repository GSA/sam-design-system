import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { SearchListSampleModule } from './feature/search-list/search-list-sample.module';
import { SearchListSampleComponent } from './feature/search-list/search-list-sample.component';
import { SearchListLayoutSampleComponent } from './feature/search-list-layout/search-list-layout-sample.component';
import { SearchListLayoutSampleModule } from './feature/search-list-layout/search-list-layout-sample.module';

export const ROUTES: Routes = [
  { path: 'searchList', component: SearchListSampleComponent },
  { path: 'searchListService', component: SearchListLayoutSampleComponent }
];

@NgModule({
  imports: [CommonModule,
    FontAwesomeModule,
    SearchListSampleModule,
    SearchListLayoutSampleModule,
    RouterModule.forChild(ROUTES)]
})
export class LayoutSampleModule {
  constructor() {
    library.add(fas, sds);
  }
}
