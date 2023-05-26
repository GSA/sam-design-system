import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperTemplateOptionsAnnounceLabelComponent } from './formly-wrapper-template-options-announce-label.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperTemplateOptionsAnnounceLabelComponent],
  exports: [FormlyWrapperTemplateOptionsAnnounceLabelComponent],
  bootstrap: [FormlyWrapperTemplateOptionsAnnounceLabelComponent],
})
export class FormlyWrapperTemplateOptionsAnnounceLabelModule {}
