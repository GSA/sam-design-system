import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyDialogModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDialogBasicComponent } from './formly-dialog-basic.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
  ],
  declarations: [FormlyDialogBasicComponent],
  exports: [FormlyDialogBasicComponent],
  bootstrap: [FormlyDialogBasicComponent],
})
export class FormlyDialogBasicModule {}
