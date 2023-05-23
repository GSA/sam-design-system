import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMultiCheckboxIntroductionComponent } from './formly-multi-checkbox-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyMultiCheckboxIntroductionComponent],
  exports: [FormlyMultiCheckboxIntroductionComponent],
  bootstrap: [FormlyMultiCheckboxIntroductionComponent],
})
export class FormlyMultiCheckboxIntroductionModule {}
