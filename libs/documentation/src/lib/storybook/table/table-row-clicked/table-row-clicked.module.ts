import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowClickedComponent } from './table-row-clicked.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TableRowClickedComponent],
  exports: [TableRowClickedComponent],
})
export class TableRowClickedModule {}
