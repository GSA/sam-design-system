import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[sdsPopup]',
  exportAs: 'sdsPopup'
})
export class SdsPopupDirective implements AfterViewInit {
  @Input() sdsPopup: HTMLElement;
  @Input() position: string;
  @Input() placement: string;
  sdsPopupDiv: HTMLElement;
  descDiv: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popup');
    this.sdsPopupDiv = document.createElement('div');
    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.sdsPopupDiv, this.placement);
    this.renderer.addClass(this.sdsPopupDiv, this.position);
    if(typeof(this.sdsPopup) !== 'string'){
    this.renderer.appendChild(this.el.nativeElement, this.sdsPopup);
    this.renderer.appendChild(this.sdsPopupDiv, this.el.nativeElement.children[0]);
    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);
    } else {
      this.descDiv = document.createElement('div');
      this.renderer.addClass(this.descDiv, 'tooltip');
      this.renderer.addClass(this.descDiv, 'tooltip-left');
      this.descDiv.innerText = this.sdsPopup;
      this.renderer.appendChild(this.sdsPopupDiv, this.descDiv);
      this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);
    }
  }
}
