import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsLinkToSbComponent } from './toasts-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastsLinkToSbComponent],
  exports: [ToastsLinkToSbComponent],
  bootstrap: [ToastsLinkToSbComponent],
})
export class ToastsLinkToSbModule {}
