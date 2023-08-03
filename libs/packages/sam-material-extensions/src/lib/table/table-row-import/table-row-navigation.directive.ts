import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'tr[mat-row][sdsTableRowNavigation]',
})
export class TableRowNavigationDirective {
  private readonly hoverClass = 'sds-table__row--hovered';

  @Input()
  emitOnRowClick = false;

  @Input()
  highlightOnHover = false;

  @Output('rowClicked')
  rowClicked = new EventEmitter<null>();

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit(): void {
    if (this.highlightOnHover) {
      console.warn('Row Input highlightOnHover is depricated. Please update input to emitOnRowClick.');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.highlightOnHover || this.emitOnRowClick) {
      this.addHoverClass();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.highlightOnHover || this.emitOnRowClick) {
      this.removeHoverClass();
    }
  }
  @HostListener('click')
  handleRowClicked() {
    if (!this.emitOnRowClick && !this.highlightOnHover) {
      console.warn(
        `Row click event is being emitted without highlighting enable. This feature is depricated and will be removed in the future. To continue receiving rowClicked events please set emitOnRowClick=true on sds-row.`
      );
      this.rowClicked.emit();
    }
  }

  addHoverClass() {
    this.renderer.addClass(this.el.nativeElement, this.hoverClass);
  }
  removeHoverClass() {
    this.renderer.removeClass(this.el.nativeElement, this.hoverClass);
  }
}
