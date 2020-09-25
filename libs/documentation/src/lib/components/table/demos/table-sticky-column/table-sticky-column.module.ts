import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableStickyColumnComponent } from './table-sticky-column.component';

@NgModule({
  declarations: [TableStickyColumnComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableStickyColumnComponent],
  bootstrap: [TableStickyColumnComponent]
})

export class TableStickyColumnModule { }
