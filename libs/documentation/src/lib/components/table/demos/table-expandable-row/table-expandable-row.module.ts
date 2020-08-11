import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '../../../../../../../packages/sam-material-extensions/src/lib/table/table.module';

import { TableExpandableRowComponent } from './table-expandable-row.component';

@NgModule({
  declarations: [TableExpandableRowComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableExpandableRowComponent],
  bootstrap: [TableExpandableRowComponent]
})

export class TableExpandableRowModule { }
