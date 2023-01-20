import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputDisabledComponent } from './formly-input-disabled.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyInputDisabledComponent],
  bootstrap: [FormlyInputDisabledComponent],
  exports: [FormlyInputDisabledComponent],
})
export class FormlyInputDisabledModule {}
