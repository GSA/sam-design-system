import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '../../../../../../../packages/sam-material-extensions/src/lib/table/table.module';

import { TableStickyHeaderComponent } from './table-sticky-header.component';

@NgModule({
  declarations: [TableStickyHeaderComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableStickyHeaderComponent],
  bootstrap: [TableStickyHeaderComponent]
})

export class TableStickyHeaderModule { }
