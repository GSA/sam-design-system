import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperTemplateOptionsUpdateonComponent } from './formly-wrapper-template-options-updateon.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperTemplateOptionsUpdateonComponent],
  exports: [FormlyWrapperTemplateOptionsUpdateonComponent],
  bootstrap: [FormlyWrapperTemplateOptionsUpdateonComponent],
})
export class FormlyWrapperTemplateOptionsOptionsModule {}
