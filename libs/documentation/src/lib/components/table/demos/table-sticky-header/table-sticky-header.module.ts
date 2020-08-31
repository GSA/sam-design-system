import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@sam-design-system/sam-material-extensions';

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
