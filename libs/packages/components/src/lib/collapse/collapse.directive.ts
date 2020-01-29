import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sdsCollapse]',
  exportAs: 'sdsCollapse',
  host: {'[class.display-none]':'collapsed'}
})
export class CollapseDirective {

  // @HostBinding('style.height')
  // private height:string;
  // // shown
  // // @HostBinding('class.display-block')
  @HostBinding('attr.aria-expanded')
  private isExpanded:boolean ;
  // // hidden
  // @HostBinding('attr.aria-hidden')
  // private isCollapsed:boolean = false;
  // // stale state
  // @HostBinding('class.display-block')
  // private isCollapsing:boolean = false;

  @Input('collapsed') collapsed: boolean;


  constructor() {
  }

  toggle() {
    if (this.isExpanded) {
        this.isExpanded = false;
    } else {
        this.isExpanded = false;
    }
}


}
