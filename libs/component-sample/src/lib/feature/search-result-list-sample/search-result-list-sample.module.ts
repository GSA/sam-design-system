import { NgModule } from '@angular/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule,
  SdsSideNavigationModule
} from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleComponent } from './search-result-list-sample.component';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSearchResultListModule } from '@gsa-sam/components';

@NgModule({
  imports: [SdsSideNavigationModule, SdsAccordionModule, CommonModule, FormsModule,
    SdsToolbarModule, SdsPageModule, SdsSearchResultListModule],
  exports: [SearchResultListSampleComponent],
  declarations: [SearchResultListSampleComponent, SearchResultListSampleDataComponent],
  providers: []
})
export class SearchResultListSampleModule { }
