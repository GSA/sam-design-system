import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableBasicComponent } from './basic.component';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  declarations: [TableBasicComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule
  ],
  exports: [TableBasicComponent],
  bootstrap: [TableBasicComponent]
})

export class TableBasicModule { }
