import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './external-link.directive';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [CommonModule, IconModule],
  exports: [ExternalLinkDirective],
})
export class SdsExternalLinkDirectivesModule {}
