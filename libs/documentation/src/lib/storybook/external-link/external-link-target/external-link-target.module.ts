import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { ExternalLinkTargetComponent } from './external-link-target.component';

@NgModule({
  imports: [CommonModule, SdsExternalLinkDirectivesModule],
  declarations: [ExternalLinkTargetComponent],
  exports: [ExternalLinkTargetComponent],
  bootstrap: [ExternalLinkTargetComponent],
})
export class ExternalLinkTargetModule {}
