import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutTemplateRefComponent } from './slide-out-template-ref.component';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, x } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({ x })],
  declarations: [SlideOutTemplateRefComponent],
  exports: [SlideOutTemplateRefComponent],
  bootstrap: [SlideOutTemplateRefComponent],
})
export class SlideOutTemplateRefModule {}
