import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormFieldBasic } from './form-field-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormFieldBasic],
  exports: [FormFieldBasic],
  bootstrap: [FormFieldBasic]
})
export class FormFieldBasicModule {}
