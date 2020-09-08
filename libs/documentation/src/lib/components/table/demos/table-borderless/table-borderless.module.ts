import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@sam-design-system/sam-material-extensions';

import { TableBorderlessComponent } from './table-borderless.component';

@NgModule({
  declarations: [TableBorderlessComponent],
  imports: [
    CommonModule,
    SdsTableModule
  ],
  exports: [TableBorderlessComponent]
})

export class TableBorderlessModule { }
