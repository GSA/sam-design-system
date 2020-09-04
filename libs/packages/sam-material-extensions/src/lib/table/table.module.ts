import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent } from './table.component';

@NgModule({
  declarations: [SdsTableComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule
  ],
  exports: [SdsTableComponent]
})
export class SdsTableModule { }
