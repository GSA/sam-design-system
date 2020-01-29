import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sdsCollapse]',
  exportAs: 'sdsCollapse',
  host: {'[class.display-none]':'collapsed'}
})
export class CollapseDirective {

  @Input('collapsed') collapsed: boolean;

  constructor() {
  }

}
