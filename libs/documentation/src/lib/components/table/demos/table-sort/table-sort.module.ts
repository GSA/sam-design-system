import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '../../../../../../../packages/sam-material-extensions/src/lib/table/table.module';

import { TableSortComponent } from './table-sort.component';

@NgModule({
  declarations: [TableSortComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableSortComponent],
  bootstrap: [TableSortComponent],
})
export class TableSortModule { }
