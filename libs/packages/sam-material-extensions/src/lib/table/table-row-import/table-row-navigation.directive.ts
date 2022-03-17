import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'tr[mat-row][sdsTableRowNavigation]'
})
export class TableRowNavigationDirective {

  private readonly hoverClass = 'sds-table__row--hovered';

  @Input()
  highlightOnHover = false;
  @Input()
  navigateToOnClick: string;

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.highlightOnHover){
      this.addHoverClass();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.highlightOnHover){
      this.removeHoverClass();
    }
  }

  @HostListener('click') onClick(){
    if(this.navigateToOnClick){
      this.router.navigateByUrl(this.navigateToOnClick);
    }
  }

  addHoverClass(){
    this.renderer.addClass(this.el.nativeElement, this.hoverClass)
  }
  removeHoverClass(){
    this.renderer.removeClass(this.el.nativeElement, this.hoverClass)
  }

}
