import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

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
