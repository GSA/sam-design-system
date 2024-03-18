import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorIntroductionComponent } from './rich-text-editor-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RichTextEditorIntroductionComponent],
  exports: [RichTextEditorIntroductionComponent],
  bootstrap: [RichTextEditorIntroductionComponent],
})
export class RichTextEditorIntroductionModule {}
