import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[sds-tab-outside]',
})
export class SDSTabOutsideDirective {
  /**
   * Emitter for tabOutside event
   */
  @Output() tabOutside: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:keyup', ['$event.target'])
  public hasFocusChanged(target) {
    const isInsideHost = this._elementRef.nativeElement.contains(target);
    const isAutocomplete = this.hasClass(target, 'sds-autocomplete');

    if (!isInsideHost && !isAutocomplete) {
      this.tabOutside.emit(undefined);
    }
  }

  private hasClass(element, className): boolean {
    while (element) {
      if (element.classList && element.classList.contains(className)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }
}
