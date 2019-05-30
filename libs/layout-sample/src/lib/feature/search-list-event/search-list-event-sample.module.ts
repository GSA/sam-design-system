import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListEventSampleComponent } from './search-list-event-sample.component';

import { SearchResultListSampleDataComponentModule } from '../../ui/search-result-list-sample-data/search-list-event-sample.module';
import {
  PaginationModule, SdsPageModule, SdsSearchResultListModule,
  SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
} from '@gsa-sam/components';

import { SearchListPageModule } from '@sam-design-system/layouts';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';

@NgModule({
  declarations: [SearchListEventSampleComponent],
  imports: [
    CommonModule, FormsModule,SearchResultListSampleDataComponentModule,
    PaginationModule, SdsPageModule, SdsSearchResultListModule,
    SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule, SearchListPageModule
  ], exports: [SearchListEventSampleComponent], providers: [SearchListSampleService]
})
export class SearchListEventSampleModule { }
