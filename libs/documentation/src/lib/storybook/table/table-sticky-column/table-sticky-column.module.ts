import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStickyColumnComponent } from './table-sticky-column.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule
  ],
  declarations: [TableStickyColumnComponent],
  exports: [TableStickyColumnComponent],
})
export class TableStickyColumnModule { }
