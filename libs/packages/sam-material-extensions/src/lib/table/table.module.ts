import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { SdsTableComponent } from './table.component';

@NgModule({
  declarations: [SdsTableComponent],
  imports: [
    CommonModule,
    CdkTableModule
  ],
  exports: [SdsTableComponent]
})
export class SdsTableModule { }
