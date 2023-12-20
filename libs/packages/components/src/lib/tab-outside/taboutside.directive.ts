import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[sds-tab-outside]',
})
export class SDSTabOutsideDirective {
  /**
   * Emitter for tabOutside event
   */
  @Output() tabOutside: EventEmitter<any> = new EventEmitter();
  @Input() additionalElements: Array<ElementRef>;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const targetElement = event.target as HTMLElement;
      const isInsideHost = this._elementRef.nativeElement.contains(targetElement);
      const isInsideAdditional = this.additionalElements?.some((elRef) =>
        elRef?.nativeElement?.contains(targetElement)
      );

      if (!isInsideHost && !isInsideAdditional) {
        this.tabOutside.emit(undefined);
      }
    }
  }
}
