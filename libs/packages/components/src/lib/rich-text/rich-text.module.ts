import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SdsRichTextComponent } from './rich-text.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CKEditorModule, ReactiveFormsModule, FormsModule],
  exports: [SdsRichTextComponent],
  declarations: [SdsRichTextComponent],
  providers: []
})
export class SdsRichTextModule {}
