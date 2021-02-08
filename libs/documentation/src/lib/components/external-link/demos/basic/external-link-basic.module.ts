import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { ExternalLinkBasicComponent } from './external-link-basic.component';

@NgModule({
  imports: [CommonModule, SdsExternalLinkDirectivesModule],
  declarations: [ExternalLinkBasicComponent],
  exports: [ExternalLinkBasicComponent],
  bootstrap: [ExternalLinkBasicComponent],
})
export class ExternalLinkBasicModule {}
