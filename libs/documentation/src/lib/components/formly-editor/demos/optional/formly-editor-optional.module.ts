import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorOptional } from './formly-editor-optional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsEditorModule } from '@gsa-sam/components';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [EditorOptional],
  imports: [CommonModule,
    FormsModule,
    SdsEditorModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  exports: [EditorOptional],
  bootstrap: [EditorOptional]
})
export class EditorOptionalModule { }
