import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMultiCheckboxExpandComponent } from './formly-multi-checkbox-expand.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyMultiCheckboxExpandComponent],
  exports: [FormlyMultiCheckboxExpandComponent],
  bootstrap: [FormlyMultiCheckboxExpandComponent],
})
export class FormlyMultiCheckboxExpandModule {}
