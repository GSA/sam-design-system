import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, OnChanges, ViewChild, AfterContentInit, AfterViewInit, ViewChildren } from '@angular/core';


@Directive({
  selector: '[sdsPopup]',
  exportAs: 'sdsPopup'
})
export class SdsPopupDirective implements OnInit, AfterViewInit{
  @Input() position:string;
   sdsPopupContent: string;
  @Input() place: string;
  @Input() className: string;
  getClassNameArray = [];
    mainContentDiv: HTMLElement;
    sdsPopupDire: HTMLElement;
    tooltipContent: any;
    tooltipConfig: HTMLElement;
    sdsPopupDiv: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'sds-popup');
    this.sdsPopupDiv = document.createElement('div');
    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');
    console.log(this.sdsPopupDiv);
  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.tooltipConfig = this.el.nativeElement.querySelector('.tooltipContent');
    this.renderer.addClass(this.sdsPopupDiv, this.place);
    this.renderer.addClass(this.sdsPopupDiv, this.position);
    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);
    this.renderer.appendChild(this.sdsPopupDiv, this.tooltipConfig);
    const strinx = this.className.split(',');
    console.log(strinx);
    for(let i=0; i<strinx.length; i++){
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


  // show() {

  //   this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDire);
  // }

  hide() {
    // this.renderer.removeClass(this.sdsPopupDire, 'sds-tooltip-show');

    window.setTimeout(() => {
      // this.renderer.removeChild(document.body, this.sdsPopupDire);
      // this.sdsPopupDire = null;
    });
  }

  show() {

    // console.log(this.tooltipContent);
    // this.renderer.appendChild(this.tooltipConfig.innerHTML, this.tooltipContent);
    // this.sdsPopupDire = this.renderer.createElement('div');
    // this.renderer.addClass(this.sdsPopupDire, 'tooltip');
    // this.renderer.addClass(this.sdsPopupDire, 'tooltip-left');
    // this.renderer.appendChild(
    //   this.sdsPopupDire,
    //   this.renderer.createText(this.sdsPopupContent)); // textNode
      // this.renderer.appendChild(this.mainContentDiv, this.sdsPopupDire);
  }
}
