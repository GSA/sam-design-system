import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { FormlyCurvyDialog } from './formlymodal-curvy.component';

@NgModule({
  declarations: [FormlyCurvyDialog],
  imports: [
    CommonModule,
    IconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
  ],
  exports: [FormlyCurvyDialog],
  bootstrap: [FormlyCurvyDialog],
})
export class FormlyCurvyDialogModule {}
