import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortingComponent } from './table-sorting.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule, IconModule],
  declarations: [TableSortingComponent],
  exports: [TableSortingComponent],
  bootstrap: [TableSortingComponent],
})
export class TableSortingModule {}
