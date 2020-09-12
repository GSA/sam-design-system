import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent, SdsTableColumnsComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef } from './table.component';

@NgModule({
  declarations: [SdsTableComponent, SdsTableColumnsComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule
  ],
  exports: [SdsTableComponent, SdsTableColumnsComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsHeaderCellDef, SdsCellDef, SdsColumnDef]
})
export class SdsTableModule { }
