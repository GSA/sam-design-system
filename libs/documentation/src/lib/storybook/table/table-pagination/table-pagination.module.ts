import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './table-pagination.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TablePaginationComponent],
  bootstrap: [TablePaginationComponent],
  exports: [TablePaginationComponent],
})
export class TablePaginationModule {}
