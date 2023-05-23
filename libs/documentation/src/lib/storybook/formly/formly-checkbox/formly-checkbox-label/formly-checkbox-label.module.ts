import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxLabelComponent } from './formly-checkbox-label.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyCheckboxLabelComponent],
  exports: [FormlyCheckboxLabelComponent],
  bootstrap: [FormlyCheckboxLabelComponent],
})
export class FormlyCheckboxLabelModule {}
