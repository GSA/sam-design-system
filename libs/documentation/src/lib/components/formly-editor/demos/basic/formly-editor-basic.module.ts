import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorBasic } from './formly-editor-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsEditorModule } from '@gsa-sam/components';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [EditorBasic],
  imports: [CommonModule,
    FormsModule,
    SdsEditorModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  exports: [EditorBasic],
  bootstrap: [EditorBasic]
})
export class EditorBasicModule { }
