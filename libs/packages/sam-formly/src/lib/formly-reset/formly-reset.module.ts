import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SdsIconModule } from '@gsa-sam/components';
import { SdsFormlyResetComponent } from './formly-reset.component';

@NgModule({
  declarations: [SdsFormlyResetComponent],
  imports: [
    CommonModule,
    SdsIconModule
  ],
  exports: [
    SdsFormlyResetComponent
  ]
})
export class SdsFormlyResetModule { }
