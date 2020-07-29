import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBorderlessComponent } from './table-borderless.component';
import { SdsTableModule } from '../../../../../../../packages/sam-material-extensions/src/lib/table/table.module';

@NgModule({
  declarations: [TableBorderlessComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableBorderlessComponent],
  entryComponents: [TableBorderlessComponent]
})

export class TableBorderlessModule { }
