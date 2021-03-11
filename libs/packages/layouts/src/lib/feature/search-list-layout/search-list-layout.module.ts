import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchListLayoutComponent } from './search-list-layout.component';
import {
  PaginationModule,
  SdsIconModule,
  SdsSearchResultListModule,
} from '@gsa-sam/components';

@NgModule({
  declarations: [SearchListLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsIconModule,
    PaginationModule,
    SdsSearchResultListModule,
  ],
  exports: [SearchListLayoutComponent],
})
export class SearchListServiceModule {}
