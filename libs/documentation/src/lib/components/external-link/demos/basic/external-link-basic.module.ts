import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkBasicComponent } from './external-link-basic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExternalLinkBasicComponent],
  exports: [ExternalLinkBasicComponent],
  // bootstrap: [ExternalLinkBasicComponent],
})
export class ExternalLinkBasicModule {}
