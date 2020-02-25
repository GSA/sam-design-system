import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[sdsPopupDire]',
  exportAs: 'sdsPopupDire'
})
export class SdsPopupDirective {
  @Input('sdsPopupDire') tooltipTitle: string;
  @Input() position: string;
  @Input() delay: string;
  @Input() popupContent: string;
  @Input() tooltipContent: HTMLElement;
  sdsPopupDire: HTMLElement;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.addClass('sds-popup__content');
    // this.renderer.addClass(this.el.nativeElement, 'sds-popup__content');
    this.renderer.addClass(this.el.nativeElement, 'sds-popup__content.out.right-middle');
  }



  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.tooltipTitle);
    if (!this.sdsPopupDire) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.sdsPopupDire) { this.hide(); }
  }

  show() {
    this.create();
    this.setPosition();
    // this.renderer.addClass(this.sdsPopupDire, 'sds-tooltip-show');

  }

  hide() {
    // this.renderer.removeClass(this.sdsPopupDire, 'sds-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.sdsPopupDire);
      this.sdsPopupDire = null;
    });
  }

  create() {

    var sdsPopupDiv = document.getElementsByClassName('sds-popup')[0];
    var sdsPopupContent = sdsPopupDiv.getElementsByClassName('sds-popup__content')[0];
    // const sdsPopupContent = this.el.nativeElement.closest('.sds-popup__content');
    // this.sdsPopupDire = this.renderer.createElement('span');
      this.sdsPopupDire = this.renderer.createElement('span');

     this.renderer.appendChild(
      this.sdsPopupDire,
      this.renderer.createText(this.tooltipTitle) // textNode
    );

      console.log(this.el.nativeElement.innerHtml);
      console.log(this.sdsPopupDire);
      console.log((this.el.nativeElement).closest('.sds-popup_content'));
    // this.renderer.appendChild(document.body, this.sdsPopupDire);
    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDire);

    // this.renderer.addClass(this.sdsPopupDire, 'sds-tooltip');
    // this.renderer.addClass(this.sdsPopupDire, `sds-tooltip-${this.position}`);
    this.renderer.addClass(this.sdsPopupDire, 'tooltip');
    this.renderer.addClass(this.sdsPopupDire, 'tooltip-left');

    // console.log(this.position);
    // if(this.position === 'right'){
    //   this.renderer.addClass(this.tooltip, 'right-middle');
    // }


    // this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    // this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    // this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    // this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {

    const hostPos = this.el.nativeElement.getBoundingClientRect();


    const tooltipPos = this.sdsPopupDire.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.position === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.position === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.position === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.position === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    // this.renderer.setStyle(this.sdsPopupDire, 'top', `${top + scrollPos}px`);
    // this.renderer.setStyle(this.sdsPopupDire, 'left', `${left}px`);
  }
}
