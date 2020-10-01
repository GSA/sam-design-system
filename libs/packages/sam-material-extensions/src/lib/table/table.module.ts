import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective } from './table.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule
  ],
  exports: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective]
})
export class SdsTableModule { }
