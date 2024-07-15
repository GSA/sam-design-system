import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsPopoverLegacyDirective } from './popover-legacy.directive';

@NgModule({
  declarations: [SdsPopoverLegacyDirective],
  imports: [CommonModule],
  exports: [SdsPopoverLegacyDirective],
})
export class SdsPopoverLegacyModule {}
