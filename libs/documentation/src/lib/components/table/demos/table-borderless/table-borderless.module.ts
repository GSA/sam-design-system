import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableBorderlessComponent } from './table-borderless.component';

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
