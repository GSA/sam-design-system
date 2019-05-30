import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListSampleComponent } from './search-list-page.component';

import {
  PaginationModule, SdsSearchResultListModule,
} from '@gsa-sam/components';

@NgModule({
  declarations: [SearchListSampleComponent],
  imports: [
    CommonModule, FormsModule,
    PaginationModule, SdsSearchResultListModule
  ], exports: [SearchListSampleComponent]
})
export class SearchListPageModule { }
