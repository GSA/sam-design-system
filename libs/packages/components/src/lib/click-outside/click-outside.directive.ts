import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

/**
 * The <sam-click-outside> directive can detect whether a click is made inside
 * the target
 */
@Directive({
  selector: '[sds-click-outside]',
})
export class SDSClickOutsideDirective {
  /**
   * Event emitted when clicked outside the target
   */
  @Output() clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const clickedInside = this.isInside(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(undefined);
    }
  }
  private isInside(targetElement: HTMLElement): boolean {
    return targetElement.closest('.sds-autocomplete') !== null;
  }
}
