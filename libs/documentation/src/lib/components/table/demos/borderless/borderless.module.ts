import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableBorderlessComponent } from './borderless.component';
import { IconModule } from 'ngx-uswds-icons';


@NgModule({
  declarations: [TableBorderlessComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    IconModule
  ],
  exports: [TableBorderlessComponent],
  bootstrap: [TableBorderlessComponent]
})

export class TableBorderlessModule { }
