import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective } from './table.component';

@NgModule({
  declarations: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule
  ],
  exports: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective]
})
export class SdsTableModule { }
