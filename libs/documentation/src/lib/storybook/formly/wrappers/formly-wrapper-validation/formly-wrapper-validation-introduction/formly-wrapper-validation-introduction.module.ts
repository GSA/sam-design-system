import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperValidationIntroductionComponent } from './formly-wrapper-validation-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperValidationIntroductionComponent],
  exports: [FormlyWrapperValidationIntroductionComponent],
  bootstrap: [FormlyWrapperValidationIntroductionComponent],
})
export class FormlyWrapperValidationIntroductionModule {}
