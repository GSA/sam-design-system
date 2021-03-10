import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableStickyComponent } from './sticky.component';


@NgModule({
  declarations: [TableStickyComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule
  ],
  exports: [TableStickyComponent],
  bootstrap: [TableStickyComponent]
})

export class TableStickyModule { }
