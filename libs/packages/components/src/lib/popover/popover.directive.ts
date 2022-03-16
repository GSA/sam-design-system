import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { debounce } from './debounce.decorator';

@Directive({
  selector: '[sdsPopover]',
  exportAs: 'sdsPopover',
})
export class SdsPopoverDirective implements AfterViewInit {
  private _sdsPopoverContent: string | TemplateRef<any> | HTMLParagraphElement;
  private _sdsPopoverTitle: string | TemplateRef<any> | HTMLParagraphElement;

  sdsPopoverDiv: HTMLElement;
  popoverVisible = false;
  popoverDivId: string;

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    const clickedOnContent = this.sdsPopoverDiv.contains($event.target as any);
    if (clickedOnContent && !this.closeOnContentClick) {
      return;
    }

    this.clickEvent();
  }

  @HostListener('document:click', ['$event'])
  clickout($event: MouseEvent) {
    if (!this.closeOnClickOutside || !this.popoverVisible) {
      return;
    }

    const clickedInElement = this.el.nativeElement.contains($event.target);
    if (!clickedInElement) {
      this.clickEvent();
    }
  }

  /**
   * Adding listener for keyup.enter to ensure that user can activate popover with keyboard
   */
  @HostListener('keyup.enter', ['$event']) onKeyUp($event: KeyboardEvent) {
    if (
      !this.closeOnContentClick &&
      this.sdsPopoverDiv.contains($event.target as any)
    ) {
      return;
    }
    this.clickEvent();
  }

  /**
   * Adding listener for keydown.space to ensure that user can activate popover with keyboard
   */
  @HostListener('keydown.Space', ['$event']) onKeySpace($event: KeyboardEvent) {
    if (
      !this.closeOnContentClick &&
      this.sdsPopoverDiv.contains($event.target as any)
    ) {
      return;
    }
    this.clickEvent();
    $event.preventDefault();
  }

  @Input()
  position: string = 'top';

  @Input() closeOnContentClick = true;

  @Input() closeOnClickOutside = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popover');

    this.sdsPopoverDiv = document.createElement('div');
  }

  ngAfterViewInit() {
    // Generating semi-random id for use with aria-describedby
    this.popoverDivId = this.el.nativeElement.id
      ? `${this.el.nativeElement.id}-popover`
      : `${this.el.nativeElement.tagName}-${this.el.nativeElement.offsetTop}-${this.el.nativeElement.offsetWidth}-popover`;
    this.sdsPopoverDiv.id = this.popoverDivId;

    this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__content');
    this.renderer.addClass(this.sdsPopoverDiv, 'tooltip');
    this.renderer.addClass(this.sdsPopoverDiv, 'out');
    this.renderer.setAttribute(
      this.sdsPopoverDiv,
      'data-position',
      this.position
    );
    this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');
    this.renderer.addClass(this.sdsPopoverDiv, this.position);

    // Add title section and divider if title included
    if (this._sdsPopoverTitle) {
      this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverTitle);

      const divider = document.createElement('hr');
      this.renderer.addClass(divider, 'divider');
      this.renderer.appendChild(this.sdsPopoverDiv, divider);
    }

    this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverContent);

    this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-haspopup',
      'dialog'
    );

    this.renderer.appendChild(this.el.nativeElement, this.sdsPopoverDiv);
  }

  @Input()
  set sdsPopover(value: string | TemplateRef<any> | HTMLParagraphElement) {
    this._sdsPopoverContent = this.handlePopoverSection(value, 'content');
  }

  get sdsPopover(): string | TemplateRef<any> | HTMLParagraphElement {
    return this._sdsPopoverContent;
  }

  @Input()
  set sdsPopoverTitle(value: string | TemplateRef<any> | HTMLParagraphElement) {
    this._sdsPopoverTitle = this.handlePopoverSection(value, 'title');
  }

  get sdsPopoverTitle(): string | TemplateRef<any> | HTMLParagraphElement {
    return this._sdsPopoverTitle;
  }

  handlePopoverSection(
    value: string | TemplateRef<any> | HTMLParagraphElement,
    classToApply: string
  ): string | TemplateRef<any> | HTMLParagraphElement {
    let popoverSection;
    if (typeof value === 'string') {
      popoverSection = document.createElement('p');
      popoverSection.innerText = value;
      this.renderer.addClass(popoverSection, classToApply);
    } else {
      popoverSection = value;
    }
    return popoverSection;
  }

  /**
   * Using debounce decorator here to prevent a scenario where a popover is
   * applied to a button and this function is called by both the enter key
   * listener and click listener.
   */
  @debounce(100)
  clickEvent() {
    this.popoverVisible = !this.popoverVisible;
    if (this.popoverVisible) {
      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__shown');
      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'false');
      this.renderer.setAttribute(
        this.el.nativeElement,
        'aria-describedby',
        this.popoverDivId
      );
      this.renderer.setAttribute(
        this.el.nativeElement,
        'aria-expanded',
        'true'
      );
      this.renderer.setAttribute(this.el.nativeElement, 'role', 'none');
      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__hidden');
    } else {
      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__hidden');
      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');
      this.renderer.setAttribute(
        this.el.nativeElement,
        'aria-expanded',
        'false'
      );
      this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');

      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__shown');
      this.renderer.removeAttribute(this.el.nativeElement, 'aria-describedby');
    }
  }
}
