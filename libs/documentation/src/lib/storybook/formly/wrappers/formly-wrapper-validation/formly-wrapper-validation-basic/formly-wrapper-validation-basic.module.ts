import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperValidationBasicComponent } from './formly-wrapper-validation-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperValidationBasicComponent],
  exports: [FormlyWrapperValidationBasicComponent],
  bootstrap: [FormlyWrapperValidationBasicComponent],
})
export class FormlyWrapperValidationBasicModule {}
