import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

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
  @Input() additionalElements: Array<ElementRef>;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    const clickedInsideAdditional = this.additionalElements?.some(elRef => elRef?.nativeElement?.contains(targetElement));
    if (!clickedInside && !clickedInsideAdditional) {
      this.clickOutside.emit(undefined);
    }
  }
}
