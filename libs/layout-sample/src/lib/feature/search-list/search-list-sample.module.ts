import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListSampleComponent } from './search-list-sample.component';
import { SearchResultListSampleDataComponentModule } from '../../ui/search-result-list-sample-data/search-list-event-sample.module';
import {
  PaginationModule, SdsPageModule, SdsSearchResultListModule,
  SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
} from '@gsa-sam/components';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';

@NgModule({
  declarations: [SearchListSampleComponent],
  imports: [
    CommonModule, FormsModule, SearchResultListSampleDataComponentModule,
    PaginationModule, SdsPageModule, SdsSearchResultListModule,
    SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
  ], exports: [SearchListSampleComponent], providers: [SearchListSampleService]
})
export class SearchListSampleModule { }
