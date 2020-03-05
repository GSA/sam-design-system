import {
    Directive,
    ElementRef,
    Inject,
    PLATFORM_ID,
    AfterViewInit,
    HostListener,
    Component, OnInit 
  } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
 
  @Directive({
    selector: '[sdstextEllipsis]'
  })
  export class SdsEllipsisDirective implements AfterViewInit {
    /** The native HTMLElement. */
    private get el(): HTMLElement {
      return this.elementRef.nativeElement;
    }
   
  
    /** The original innerText; */
    private innerText: string;
  
    constructor(
      private readonly elementRef: ElementRef,
      @Inject(PLATFORM_ID) private readonly platformId
    ) {}
  
    public ngAfterViewInit(): void {
      this.truncate();
     
    }
   
    @HostListener('window:resize')
    private onWindowResize() {
      this.truncate();
    }
  
  
    private truncate(): void {
      // verify execution context is the browser platform
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
  
      // store the original innerText
      if (this.innerText === undefined) {
        this.innerText = this.el.innerText.trim();
      }
  
      // reset the innerText
      this.el.innerText = this.innerText;
  
      // truncate the text and append the ellipsis
      const text = this.innerText.split(' ');
       //  this.el.style.height = "70px";
         this.el.style.whiteSpace="nowrap";
         this.el.style.overflow="hidden";
     
      // $(elm).appendTo(this.el);
       //  while (text.length > 0 && this.el.scrollHeight > this.el.clientHeight) {
        while (text.length > 0 && this.el.scrollWidth > this.el.clientWidth) {
        text.pop();
        this.el.innerHTML = `${text.join(' ')}…`;
       
      }
    }
  }