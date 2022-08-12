import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutCustomHeaderComponent } from './custom-header.component';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, x } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({ x })],
  declarations: [SlideOutCustomHeaderComponent],
  exports: [SlideOutCustomHeaderComponent],
  bootstrap: [SlideOutCustomHeaderComponent],
})
export class SlideOutCustomHeaderModule {}
