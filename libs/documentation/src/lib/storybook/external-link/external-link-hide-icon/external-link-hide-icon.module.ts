import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { ExternalLinkHideIconComponent } from './external-link-hide-icon.component';

@NgModule({
  imports: [CommonModule, SdsExternalLinkDirectivesModule],
  declarations: [ExternalLinkHideIconComponent],
  exports: [ExternalLinkHideIconComponent],
  bootstrap: [ExternalLinkHideIconComponent],
})
export class ExternalLinkHideIconModule {}
