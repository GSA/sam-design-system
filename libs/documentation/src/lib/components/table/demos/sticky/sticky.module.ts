import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableStickyComponent } from './sticky.component';
import { IconModule } from 'ngx-uswds-icons';


@NgModule({
  declarations: [TableStickyComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    IconModule
  ],
  exports: [TableStickyComponent],
  bootstrap: [TableStickyComponent]
})

export class TableStickyModule { }
