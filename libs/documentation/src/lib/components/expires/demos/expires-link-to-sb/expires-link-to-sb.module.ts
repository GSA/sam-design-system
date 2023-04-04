import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpiresLinkToSbComponent } from './expires-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpiresLinkToSbComponent],
  exports: [ExpiresLinkToSbComponent],
  bootstrap: [ExpiresLinkToSbComponent],
})
export class ExpiresLinkToSbModule {}
