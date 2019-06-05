import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListLayoutSampleComponent } from './search-list-layout-sample.component';

import { SearchResultListSampleDataComponentModule } from '../../ui/search-result-list-sample-data/search-list-event-sample.module';

import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
import { SearchListServiceModule } from '@sam-design-system/layouts';


@NgModule({
  declarations: [SearchListLayoutSampleComponent],
  imports: [
    CommonModule, FormsModule, SearchResultListSampleDataComponentModule,
    SearchListServiceModule
  ], exports: [SearchListLayoutSampleComponent], providers: [SearchListSampleService]
})
export class SearchListLayoutSampleModule { }
