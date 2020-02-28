import { Directive, Input, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[sdsPopup]',
  exportAs: 'sdsPopup'
})
export class SdsPopupDirective implements AfterViewInit {
  @Input() position: string;
  @Input() place: string;
  @Input() className: string;
  getClassNameArray = [];
  sdsPopupDire: HTMLElement;
  tooltipContent: any;
  tooltipConfig: HTMLElement;
  sdsPopupDiv: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popup');
    this.sdsPopupDiv = document.createElement('div');
    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');
  }


  ngAfterViewInit() {
    this.tooltipConfig = this.el.nativeElement.querySelector('.tooltipContent');
    this.renderer.addClass(this.sdsPopupDiv, this.place);
    this.renderer.addClass(this.sdsPopupDiv, this.position);
    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);
    this.renderer.appendChild(this.sdsPopupDiv, this.tooltipConfig);
    const strinx = this.className.split(',');
    for (let i = 0; i < strinx.length; i++) {
      this.renderer.addClass(this.tooltipConfig, strinx[i]);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.appendChild(this.sdsPopupDiv, this.tooltipConfig);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.sdsPopupDire) {
      this.renderer.removeChild(document.body, this.sdsPopupDire);
    }
  }
}
