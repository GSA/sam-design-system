import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[sds-click-outside]',
})
export class SDSClickOutsideDirective {
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
    // Check if the target element or any of its ancestors has the 'autocomplete-container' class
    return targetElement.closest('.sds-autocomplete') !== null;
  }
}
