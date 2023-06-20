import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperTemplateOptionsBlurComponent } from './formly-wrapper-template-options-blur.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperTemplateOptionsBlurComponent],
  exports: [FormlyWrapperTemplateOptionsBlurComponent],
  bootstrap: [FormlyWrapperTemplateOptionsBlurComponent],
})
export class FormlyWrapperTemplateOptionsBlurModule {}
