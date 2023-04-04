import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[sdsTooltip]',
  exportAs: 'sdsTooltip',
})
export class SdsTooltipDirective implements AfterViewInit, OnChanges {
  private _sdsTooltip: string | TemplateRef<any> | HTMLDivElement;
  sdsTooltipDiv: HTMLElement;

  @Input()
  position: string = 'top';

  private _tooltipShowing = false;

  /**
   * Handling  hover, focus & blur here to allow the tooltip to be removed when "esc" pressed.
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }
  @HostListener('focus') onFocus() {
    this.showTooltip();
  }
  @HostListener('blur') onBlur() {
    this.hideTooltip();
  }

  @HostListener('window:keyup.escape', ['$event']) onKeyUp($event: KeyboardEvent) {
    if (this._tooltipShowing) {
      this.hideTooltip();
    }
  }

  showTooltip() {
    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'false');
    this.renderer.addClass(this.sdsTooltipDiv, 'tooltip-expanded');
    this._tooltipShowing = true;
  }
  hideTooltip() {
    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'true');
    this.renderer.removeClass(this.sdsTooltipDiv, 'tooltip-expanded');
    this._tooltipShowing = false;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-tooltip');
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');

    this.sdsTooltipDiv = document.createElement('div');

    this.renderer.addClass(this.sdsTooltipDiv, 'sds-tooltip__content');
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.sdsTooltipDiv, 'data-position', this.position);
    if (this.position && this.sdsTooltip) {
      this.renderer.addClass(this.sdsTooltipDiv, this.position);
      this.renderer.appendChild(this.sdsTooltipDiv, this.sdsTooltip);
      this.renderer.appendChild(this.el.nativeElement, this.sdsTooltipDiv);
    }
  }

  @Input()
  set sdsTooltip(value: string | TemplateRef<any> | HTMLDivElement) {
    if (typeof value === 'string') {
      this._sdsTooltip = document.createElement('div');
      this._sdsTooltip.innerHTML = value;
    } else {
      this._sdsTooltip = value;
    }

    if (this._sdsTooltip) {
      this.renderer.addClass(this._sdsTooltip, 'tooltip');
    }
  }

  get sdsTooltip(): string | TemplateRef<any> | HTMLDivElement {
    return this._sdsTooltip;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.position) {
      this.clearAndReplacePosition(changes.position.currentValue, changes.position.previousValue);
    }
    if (changes.sdsTooltip && !changes.sdsTooltip.firstChange) {
      this.clearAndReplaceTooltipContent(this.sdsTooltip);
    }
  }

  clearAndReplacePosition(newPosition: string, oldPosition?: string) {
    if (oldPosition) {
      this.renderer.removeClass(this.sdsTooltipDiv, oldPosition);
    }
    this.renderer.setAttribute(this.sdsTooltipDiv, 'data-position', newPosition);
    this.renderer.addClass(this.sdsTooltipDiv, newPosition);
  }

  clearAndReplaceTooltipContent(newContent) {
    const toRemove = this.sdsTooltipDiv.querySelector('.tooltip');
    this.renderer.removeChild(toRemove.parentNode, toRemove);
    this.renderer.appendChild(this.sdsTooltipDiv, newContent);
  }
}
