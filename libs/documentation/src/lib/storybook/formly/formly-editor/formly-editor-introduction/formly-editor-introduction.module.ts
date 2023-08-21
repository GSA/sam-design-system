import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyEditorIntroductionComponent } from './formly-editor-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyEditorIntroductionComponent],
  exports: [FormlyEditorIntroductionComponent],
  bootstrap: [FormlyEditorIntroductionComponent],
})
export class FormlyEditorIntroductionModule {}
