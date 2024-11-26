import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { TableHeaderColorComponent } from './table-header-color.component';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TableHeaderColorComponent],
  exports: [TableHeaderColorComponent],
  bootstrap: [TableHeaderColorComponent],
})
export class TableHeaderColorModule {}
