import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyEditorRegexComponent } from './formly-editor-regex.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyEditorRegexComponent],
  exports: [FormlyEditorRegexComponent],
  bootstrap: [FormlyEditorRegexComponent],
})
export class FormlyEditorRegexModule {}
