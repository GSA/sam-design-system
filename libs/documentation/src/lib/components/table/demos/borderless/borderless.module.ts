import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableBorderlessComponent } from './borderless.component';


@NgModule({
  declarations: [TableBorderlessComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule
  ],
  exports: [TableBorderlessComponent],
  bootstrap: [TableBorderlessComponent]
})

export class TableBorderlessModule { }
