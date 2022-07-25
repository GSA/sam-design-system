import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { FormlyDialog } from './formly-modal.component';

@NgModule({
  declarations: [FormlyDialog],
  imports: [
    CommonModule,
    IconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
  ],
  exports: [FormlyDialog],
  bootstrap: [FormlyDialog],
})
export class FormlyDialogModule {}
