import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective } from './table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { PaginationModule, SdsIconModule } from '@gsa-sam/components';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    PaginationModule,
    SdsIconModule,
  ],
  exports: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective]
})
export class SdsTableModule { }
