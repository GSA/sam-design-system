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
import { TableRowNavigationDirective } from './table-row-import/table-row-navigation.directive';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { PaginationModule } from '@gsa-sam/components';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
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
    TableRowNavigationDirective,
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
    TableRowNavigationDirective,
  ],
})
export class SdsTableModule {}
