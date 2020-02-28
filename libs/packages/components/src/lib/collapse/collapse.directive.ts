import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sdsCollapse]',
  exportAs: 'sdsCollapse'
})
export class CollapseDirective {

  @Input('sdsCollapse') collapsed: boolean = true;

  constructor() {
  }

}
