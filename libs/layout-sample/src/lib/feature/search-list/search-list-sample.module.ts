import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListSampleComponent } from './search-list-sample.component';
import { SearchResultListSampleDataComponent } from '../../ui/search-result-list-sample-data/search-result-list-sample-data.component';
import {
  PaginationModule, SdsPageModule, SdsSearchResultListModule,
  SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
} from '@gsa-sam/components';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';

@NgModule({
  declarations: [SearchListSampleComponent, SearchResultListSampleDataComponent],
  imports: [
    CommonModule,
    PaginationModule, SdsPageModule, SdsSearchResultListModule,
    SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
  ], exports: [SearchListSampleComponent], providers: [SearchListSampleService]
})
export class SearchListSampleModule { }
