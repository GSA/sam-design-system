import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './external-link.directive';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [CommonModule, SdsIconModule],
  entryComponents: [],
  exports: [ExternalLinkDirective],
})
export class SdsExternalLinkDirectivesModule {}
