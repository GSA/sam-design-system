import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMultiCheckboxGroupComponent } from './formly-multi-checkbox-group.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyMultiCheckboxGroupComponent],
  exports: [FormlyMultiCheckboxGroupComponent],
  bootstrap: [FormlyMultiCheckboxGroupComponent],
})
export class FormlyMultiCheckboxGroupModule {}
