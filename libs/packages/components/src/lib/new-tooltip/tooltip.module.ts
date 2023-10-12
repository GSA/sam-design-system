import { NgModule } from '@angular/core';

import { SdsTooltip } from './tooltip';

export { SdsTooltipConfig } from './tooltip-config';
export { SdsTooltip as NgbTooltip } from './tooltip';
export { Placement } from '../util/positioning';

@NgModule({
  imports: [SdsTooltip],
  exports: [SdsTooltip],
})
export class SdsTooltipModule {}
