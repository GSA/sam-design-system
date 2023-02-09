import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-tooltip-configurable',
  templateUrl: './tooltip-configurable.component.html',
})
export class TooltipConfigurableComponent {
  @Input('position')
  position: 'top' | 'bottom' | 'right' | 'left' = 'top';

  @Input('tooltipContent')
  tooltipContent: string;

  constructor() {}
}
