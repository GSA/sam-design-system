import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SdsRichTextComponent } from './rich-text.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [CommonModule, CKEditorModule],
  exports: [SdsRichTextComponent],
  declarations: [SdsRichTextComponent],
  providers: []
})
export class SdsRichTextModule {}
