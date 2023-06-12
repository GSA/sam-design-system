import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStickyHeaderComponent } from './table-sticky-header.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule
  ],
  declarations: [TableStickyHeaderComponent],
  exports: [TableStickyHeaderComponent],
})
export class TableStickyHeaderModule { }
