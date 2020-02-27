import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, OnChanges, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[sdsPopup]',
  exportAs: 'sdsPopup'
})
export class SdsPopupDirective implements OnInit, AfterViewInit{
   position:string;
   sdsPopupContent: string;
   place: string;
    mainContentDiv: HTMLElement;
    sdsPopupDire: HTMLElement;


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popup');
  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.mainContentDiv = this.el.nativeElement.querySelector('.sds-popup__content');
    this.sdsPopupContent = this.mainContentDiv.getAttribute('sdsPopupContent');
    this.position = this.mainContentDiv.getAttribute('position');
    this.place = this.mainContentDiv.getAttribute('place');
 }

  @HostListener('mouseenter') onMouseEnter() {
    this.show();
    // if (!this.sdsPopupDire) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.sdsPopupDire) { this.hide(); }
  }


  // show() {

  //   // this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDire);
  // }

  hide() {
    // this.renderer.removeClass(this.sdsPopupDire, 'sds-tooltip-show');
    this.renderer.removeChild(document.body, this.sdsPopupDire);
    window.setTimeout(() => {
      // this.renderer.removeChild(document.body, this.sdsPopupDire);
      // this.sdsPopupDire = null;
    });
  }

  show() {
    this.renderer.addClass(this.mainContentDiv, this.place);
    this.renderer.addClass(this.mainContentDiv, this.position);
    this.sdsPopupDire = this.renderer.createElement('div');
    this.renderer.addClass(this.sdsPopupDire, 'tooltip');
    this.renderer.addClass(this.sdsPopupDire, 'tooltip-left');
    this.renderer.appendChild(
      this.sdsPopupDire,
      this.renderer.createText(this.sdsPopupContent)); // textNode
      this.renderer.appendChild(this.mainContentDiv, this.sdsPopupDire);
  }
}
