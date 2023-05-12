import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaMaxlengthComponent } from './formly-text-area-maxlength.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaMaxlengthComponent],
  exports: [FormlyTextAreaMaxlengthComponent],
  bootstrap: [FormlyTextAreaMaxlengthComponent],
})
export class FormlyTextAreaMaxlengthModule {}
