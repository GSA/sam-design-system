import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from 'ngx-uswds-icons';
import { SdsFormlyResetComponent } from './formly-reset.component';
import { NgxBootstrapIconsModule, arrowClockwise } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [SdsFormlyResetComponent],
  imports: [
    CommonModule,
    IconModule,
    NgxBootstrapIconsModule.pick({arrowClockwise})
  ],
  exports: [
    SdsFormlyResetComponent
  ]
})
export class SdsFormlyResetModule { }
