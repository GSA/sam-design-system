import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorMinHeightComponent } from './rich-text-editor-min-height.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsRichTextModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsRichTextModule, FormsModule, ReactiveFormsModule],
  declarations: [RichTextEditorMinHeightComponent],
  exports: [RichTextEditorMinHeightComponent],
  bootstrap: [RichTextEditorMinHeightComponent],
})
export class RichTextEditorMinHeightModule {}
