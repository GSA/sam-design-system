import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective } from './table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { PaginationModule, SdsIconModule } from '@gsa-sam/components';
import { MatPaginatorModule } from '@angular/material/paginator';
import { chevronDown, chevronUp, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    PaginationModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({chevronUp, chevronDown})
  ],
  exports: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective]
})
export class SdsTableModule { }
