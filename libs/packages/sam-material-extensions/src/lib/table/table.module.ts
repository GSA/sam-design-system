import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsTableComponent,
  SdsTableRowComponent,
  SdsTableHeaderRowComponent,
  SdsTableFooterRowComponent,
  SdsTableColumnDefComponent,
  SdsTableCellDirective,
  SdsTableHeaderCellDirective,
  SdsTableFooterCellDirective,
} from './table.component';
import { TableRowClickDirective } from './table-row-click/table-row-click.directive';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PaginationModule } from '@gsa-sam/components';
import { MatPaginatorModule } from '@angular/material/paginator';
import { chevronDown, chevronUp, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SdsTableComponent,
    SdsTableRowComponent,
    SdsTableHeaderRowComponent,
    SdsTableFooterRowComponent,
    SdsTableColumnDefComponent,
    SdsTableCellDirective,
    SdsTableHeaderCellDirective,
    SdsTableFooterCellDirective,
    TableRowClickDirective,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    PaginationModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ chevronUp, chevronDown }),
  ],
  exports: [
    SdsTableComponent,
    SdsTableRowComponent,
    SdsTableHeaderRowComponent,
    SdsTableFooterRowComponent,
    SdsTableColumnDefComponent,
    SdsTableCellDirective,
    SdsTableHeaderCellDirective,
    SdsTableFooterCellDirective,
    TableRowClickDirective,
  ],
})
export class SdsTableModule {}
