import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperDescriptionIntroductionComponent } from './formly-wrapper-description-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperDescriptionIntroductionComponent],
  exports: [FormlyWrapperDescriptionIntroductionComponent],
  bootstrap: [FormlyWrapperDescriptionIntroductionComponent],
})
export class FormlyWrapperDescriptionIntroductionModule {}
