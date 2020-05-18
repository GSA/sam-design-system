import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFormlyResetComponent } from './formly-reset.component';

@NgModule({
  declarations: [SdsFormlyResetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SdsFormlyResetComponent
  ]
})
export class SdsFormlyResetModule { }
