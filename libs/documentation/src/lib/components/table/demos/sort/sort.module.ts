import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableSortComponent } from './sort.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [TableSortComponent],
  imports: [CommonModule, SdsTableModule, IconModule],
  exports: [TableSortComponent],
  bootstrap: [TableSortComponent],
})
export class TableSortModule {}
