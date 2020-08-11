import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@sam-design-system/sam-material-extensions';

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
