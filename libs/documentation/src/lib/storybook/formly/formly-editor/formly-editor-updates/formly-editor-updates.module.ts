import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyEditorUpdatesComponent } from './formly-editor-updates.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyEditorUpdatesComponent],
  exports: [FormlyEditorUpdatesComponent],
  bootstrap: [FormlyEditorUpdatesComponent],
})
export class FormlyEditorUpdatesModule {}
