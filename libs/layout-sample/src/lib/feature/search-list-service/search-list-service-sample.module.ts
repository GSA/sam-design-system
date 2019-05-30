import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListServiceSampleComponent } from './search-list-service-sample.component';

import { SearchResultListSampleDataComponentModule } from '../../ui/search-result-list-sample-data/search-list-event-sample.module';

import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
import {SearchListServiceModule} from '@sam-design-system/layouts';


@NgModule({
  declarations: [SearchListServiceSampleComponent],
  imports: [
    CommonModule, FormsModule, SearchResultListSampleDataComponentModule,
  SearchListServiceModule
  ], exports: [SearchListServiceSampleComponent], providers: [SearchListSampleService]
})
export class SearchListServiceSampleModule { }
