import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutCustomTemplateComponent } from './slide-out-custom-template.component';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsDialogModule],
  declarations: [SlideOutCustomTemplateComponent],
  exports: [SlideOutCustomTemplateComponent],
  bootstrap: [SlideOutCustomTemplateComponent],
})
export class SlideOutCustomTemplateModule {}
