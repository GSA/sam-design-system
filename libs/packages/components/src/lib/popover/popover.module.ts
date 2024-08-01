import { NgModule } from '@angular/core';

import { SdsPopover } from './popover';

export { SdsPopover } from './popover';
export { SdsPopoverConfig } from './popover-config';
export { Placement } from '../util/positioning';

@NgModule({
  imports: [SdsPopover],
  exports: [SdsPopover],
})
export class SdsPopoverModule {}
