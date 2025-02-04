import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMultiCheckboxBasicComponent } from './formly-multi-checkbox-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyMultiCheckboxBasicComponent],
  exports: [FormlyMultiCheckboxBasicComponent],
  bootstrap: [FormlyMultiCheckboxBasicComponent],
})
export class FormlyMultiCheckboxBasicModule {}
