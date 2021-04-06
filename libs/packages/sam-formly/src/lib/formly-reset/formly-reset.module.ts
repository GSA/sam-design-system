import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SdsIconModule } from '@gsa-sam/components';
import { SdsFormlyResetComponent } from './formly-reset.component';
import { NgxBootstrapIconsModule, arrowClockwise } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [SdsFormlyResetComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({arrowClockwise})
  ],
  exports: [
    SdsFormlyResetComponent
  ]
})
export class SdsFormlyResetModule { }
