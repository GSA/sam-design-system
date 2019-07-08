import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListLayoutSampleComponent } from './search-list-layout-sample.component';

import { SearchResultListSampleDataComponentModule } from '../../ui/search-result-list-sample-data/search-list-event-sample.module';

import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
import { SearchListServiceModule } from '@sam-design-system/layouts';
import {
  SearchListComunicationService,
  SdsPageModule,
  SdsToolbarModule,
  SdsAccordionModule
} from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

@NgModule({
  declarations: [SearchListLayoutSampleComponent],
  imports: [
    CommonModule, FormsModule, SearchResultListSampleDataComponentModule,
    SearchListServiceModule, SdsPageModule,
    SdsToolbarModule, SdsAccordionModule, SdsFiltersModule
  ], exports: [SearchListLayoutSampleComponent]
  , providers: [SearchListSampleService, SearchListComunicationService]
})
export class SearchListLayoutSampleModule { }
