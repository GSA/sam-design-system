import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsTreeTableComponent, SdsTreeTableRow } from './tree-table.component';
import { UsaTableModule } from '@gsa-sam/ngx-uswds';
import {
  NgxBootstrapIconsModule,
  plusCircleFill,
  dashCircleFill,
} from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    UsaTableModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ plusCircleFill, dashCircleFill }),
  ],
  declarations: [SdsTreeTableComponent, SdsTreeTableRow],
  exports: [SdsTreeTableComponent, SdsTreeTableRow],
})
export class SdsTreeTableModule {}
