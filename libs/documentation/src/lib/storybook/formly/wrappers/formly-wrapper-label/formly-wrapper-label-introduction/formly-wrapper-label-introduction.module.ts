import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperLabelIntroductionComponent } from './formly-wrapper-label-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperLabelIntroductionComponent],
  exports: [FormlyWrapperLabelIntroductionComponent],
  bootstrap: [FormlyWrapperLabelIntroductionComponent],
})
export class FormlyWrapperLabelIntroductionModule {}
