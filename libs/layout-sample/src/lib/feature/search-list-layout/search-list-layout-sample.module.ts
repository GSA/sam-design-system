import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [SearchListLayoutSampleComponent],
  imports: [
    CommonModule, FormsModule, SearchResultListSampleDataComponentModule,
    SearchListServiceModule, SdsPageModule,
    SdsToolbarModule, SdsAccordionModule, SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule
  ], exports: [SearchListLayoutSampleComponent]
  , providers: [SearchListSampleService, SearchListComunicationService]
})
export class SearchListLayoutSampleModule { }
