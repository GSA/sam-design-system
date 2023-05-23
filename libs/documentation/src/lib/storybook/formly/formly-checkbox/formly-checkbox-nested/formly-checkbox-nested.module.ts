import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxNestedComponent } from './formly-checkbox-nested.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyCheckboxNestedComponent],
  exports: [FormlyCheckboxNestedComponent],
  bootstrap: [FormlyCheckboxNestedComponent],
})
export class FormlyCheckboxNestedModule {}
