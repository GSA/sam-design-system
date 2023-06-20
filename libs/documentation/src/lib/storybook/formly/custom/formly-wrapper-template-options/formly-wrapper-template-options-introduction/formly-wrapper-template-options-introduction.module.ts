import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperTemplateOptionsIntroductionComponent } from './formly-wrapper-template-options-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperTemplateOptionsIntroductionComponent],
  exports: [FormlyWrapperTemplateOptionsIntroductionComponent],
  bootstrap: [FormlyWrapperTemplateOptionsIntroductionComponent],
})
export class FormlyWrapperTemplateOptionsIntroductionModule {}
