import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sdsCollapse]',
  exportAs: 'sdsCollapse',
  host: {'[class.display-none]':'collapsed'}
})
export class CollapseDirective {

  @HostBinding('style.height')
  private height:string;
  // shown
  // @HostBinding('class.display-block')
  @HostBinding('attr.aria-expanded')
  private isExpanded:boolean = true;
  // hidden
  @HostBinding('attr.aria-hidden')
  private isCollapsed:boolean = false;
  // stale state
  @HostBinding('class.display-block')
  private isCollapsing:boolean = false;

  @Input()
  private set collapse(value:boolean) {
      this.isExpanded = value;
      this.toggle();
  }

  private get collapse():boolean {
      return this.isExpanded;
  }

  constructor() {
  }

  toggle() {
    if (this.isExpanded) {
        this.show();
    } else {
        this.hide();
    }
}

hide(){
    this.isCollapsing = false;
    this.isCollapsed = true;
    this.height = '0';
}

show() {
    this.isCollapsing = true;
    this.isCollapsed = false;
    this.height = 'auto';
}

}
