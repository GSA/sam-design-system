import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent } from './table.component';

@NgModule({
  declarations: [SdsTableComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    FontAwesomeModule
  ],
  exports: [SdsTableComponent]
})
export class SdsTableModule { }
