import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutTemplateRefComponent } from './slide-out-template-ref.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SlideOutTemplateRefComponent],
  exports: [SlideOutTemplateRefComponent],
  bootstrap: [SlideOutTemplateRefComponent],
})
export class SlideOutTemplateRefModule {}
