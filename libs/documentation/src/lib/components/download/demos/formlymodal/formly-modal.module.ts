import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import {SdsIconModule } from '@gsa-sam/components';
import { FormlyDialog } from './formly-modal.component';

@NgModule({
  declarations: [FormlyDialog],
  imports: [
    CommonModule,
    SdsIconModule,
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
