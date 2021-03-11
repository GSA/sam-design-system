import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [CommonModule],
  entryComponents: [],
  exports: [ExternalLinkDirective],
})
export class SdsExternalLinkDirectivesModule {}
