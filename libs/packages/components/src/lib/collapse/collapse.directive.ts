import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sdsCollapse]',
  exportAs: 'sdsCollapse',
  host: {'[class.display-none]':'collapsed'}
})
export class CollapseDirective {


  @HostBinding('attr.aria-expanded')
  private isExpanded:boolean ;

  @Input('collapsed') collapsed: boolean;

  constructor() {
  }

}
