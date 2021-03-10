import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableBasicComponent } from './basic.component';


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
