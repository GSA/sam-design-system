import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableSortComponent } from './sort.component';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  declarations: [TableSortComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule
  ],
  exports: [TableSortComponent],
  bootstrap: [TableSortComponent]
})

export class TableSortModule { }
