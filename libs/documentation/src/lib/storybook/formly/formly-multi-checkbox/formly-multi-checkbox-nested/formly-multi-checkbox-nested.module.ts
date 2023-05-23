import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMultiCheckboxNestedComponent } from './formly-multi-checkbox-nested.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyMultiCheckboxNestedComponent],
  exports: [FormlyMultiCheckboxNestedComponent],
  bootstrap: [FormlyMultiCheckboxNestedComponent],
})
export class FormlyMultiCheckboxNestedModule {}
