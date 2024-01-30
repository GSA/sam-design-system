import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorMaxHeightComponent } from './rich-text-editor-max-height.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsRichTextModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsRichTextModule, FormsModule, ReactiveFormsModule],
  declarations: [RichTextEditorMaxHeightComponent],
  bootstrap: [RichTextEditorMaxHeightComponent],
  exports: [RichTextEditorMaxHeightComponent],
})
export class RichTextEditorMaxHeightModule {}
