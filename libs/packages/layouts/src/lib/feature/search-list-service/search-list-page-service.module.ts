import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListPageServiceComponent } from './search-list-page-service.component';
import { PaginationModule, SdsSearchResultListModule } from '@gsa-sam/components';

@NgModule({
  declarations: [SearchListPageServiceComponent],
  imports: [
    CommonModule, FormsModule,
    PaginationModule, SdsSearchResultListModule
  ], exports: [SearchListPageServiceComponent]
})
export class SearchListServiceModule { }
