import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableChangeDataComponent } from './table-change-data.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule,
  ],
  declarations: [TableChangeDataComponent],
  exports: [TableChangeDataComponent],
})
export class TableChangeDataModule { }
