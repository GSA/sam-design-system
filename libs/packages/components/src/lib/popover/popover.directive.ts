import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sdsPopover]',
  exportAs: 'sdsPopover'
})
export class SdsPopoverDirective implements AfterViewInit {
  private _sdsPopoverContent: string | TemplateRef<any> | HTMLParagraphElement;
  private _sdsPopoverTitle: string | TemplateRef<any> | HTMLParagraphElement;

  sdsPopoverDiv: HTMLElement;
  clicked= false;

  @HostListener('click', ['$event']) onClick($event){
    this.clicked = !this.clicked;
    if(this.clicked){
      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__shown');
      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__hidden');
      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'false');
    } else {
      this.renderer.removeClass(this.sdsPopoverDiv, 'sds-popover__shown');
      this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__hidden');
      this.renderer.setAttribute(this.sdsPopoverDiv, 'aria-hidden', 'true');
    }
  }

  @Input()
  position: string = 'top';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popover');

    this.sdsPopoverDiv = document.createElement('div');
    this.renderer.addClass(this.sdsPopoverDiv, 'sds-popover__content');
    this.renderer.addClass(this.sdsPopoverDiv, 'tooltip')
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.sdsPopoverDiv, 'data-position', this.position)
    this.renderer.addClass(this.sdsPopoverDiv, 'out');
    this.renderer.addClass(this.sdsPopoverDiv, this.position);
    if(this._sdsPopoverTitle){
      this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverTitle);

      const divider = document.createElement('hr');
      this.renderer.addClass(divider, 'divider');
      this.renderer.appendChild(this.sdsPopoverDiv, divider);
    }
    this.renderer.appendChild(this.sdsPopoverDiv, this._sdsPopoverContent);

    this.renderer.appendChild(this.el.nativeElement, this.sdsPopoverDiv);
  }

  @Input()
  set sdsPopover(value: string | TemplateRef<any> | HTMLParagraphElement){
    this._sdsPopoverContent = this.handlePopoverSection(value, 'content')
  }

  get sdsPopover(): string | TemplateRef<any> | HTMLParagraphElement{
    return this._sdsPopoverContent;
  }

  @Input()
  set sdsPopoverTitle(value: string | TemplateRef<any> | HTMLParagraphElement){
    this._sdsPopoverTitle = this.handlePopoverSection(value, 'title')
  }

  get sdsPopoverTitle(): string | TemplateRef<any> | HTMLParagraphElement{
    return this._sdsPopoverTitle;
  }

  handlePopoverSection(value: string | TemplateRef<any> | HTMLParagraphElement,  classToApply: string): string | TemplateRef<any> | HTMLParagraphElement{
    let popoverSection;
    if(typeof value === 'string'){
      popoverSection = document.createElement('p');
      popoverSection.innerText = value;
      this.renderer.addClass(popoverSection, classToApply)

    } else {
      popoverSection = value;
    }
    return popoverSection;
  }
}
