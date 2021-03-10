import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TableFullComponent } from './full.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TableFullComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    SdsIconModule,
    HttpClientModule
  ],
  exports: [TableFullComponent],
  bootstrap: [TableFullComponent]
})

export class TableFullModule { }
