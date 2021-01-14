import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormlyDialog } from './formly-modal.component';

@NgModule({
  declarations: [FormlyDialog],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule
  ],
  exports: [FormlyDialog],
  bootstrap: [FormlyDialog]
})
export class FormlyDialogModule {}
