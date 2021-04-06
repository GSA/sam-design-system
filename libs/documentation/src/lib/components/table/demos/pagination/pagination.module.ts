import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TablePaginationComponent } from './pagination.component';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  declarations: [TablePaginationComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule
  ],
  exports: [TablePaginationComponent],
  bootstrap: [TablePaginationComponent]
})

export class TablePaginationModule { }
