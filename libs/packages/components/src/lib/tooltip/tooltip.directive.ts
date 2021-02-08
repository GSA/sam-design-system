import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef } from '@angular/core';

@Directive({
  selector: '[sdsTooltip]',
  exportAs: 'sdsTooltip'
})
export class SdsTooltipDirective implements AfterViewInit {

  private _sdsTooltip: string | TemplateRef<any> | HTMLDivElement;
  sdsTooltipDiv: HTMLElement;

  @Input()
  position: string = 'top';

  @HostListener('focus', ['$event']) onFocus(){
    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'false')
  }
  @HostListener('blur', ['$event']) onBlur(){
    this.renderer.setAttribute(this.sdsTooltipDiv, 'aria-hidden', 'true')
  }


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-tooltip');
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0')

    this.sdsTooltipDiv = document.createElement('div');

    this.renderer.addClass(this.sdsTooltipDiv, 'sds-tooltip__content');
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.sdsTooltipDiv, 'data-position', this.position)
    this.renderer.addClass(this.sdsTooltipDiv, this.position);
    this.renderer.appendChild(this.sdsTooltipDiv, this.sdsTooltip);

    this.renderer.appendChild(this.el.nativeElement, this.sdsTooltipDiv);
  }

  @Input()
  set sdsTooltip(value: string | TemplateRef<any> | HTMLDivElement){
    if(typeof value === 'string'){
      this._sdsTooltip = document.createElement('div');
      this._sdsTooltip.innerText = value;
    } else {
      this._sdsTooltip = value;
    }
    this.renderer.addClass(this._sdsTooltip, 'tooltip')
  }

  get sdsTooltip(): string | TemplateRef<any> | HTMLDivElement{
    return this._sdsTooltip;
  }

}
