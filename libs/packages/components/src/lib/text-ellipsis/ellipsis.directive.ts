import {
  Directive,
  ElementRef,
  Inject,
  Input,
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
  @Input() textLinesLimit: number;
  /** The native HTMLElement. */
  private get el(): HTMLElement {
    return this.elementRef.nativeElement;
  }
 

  /** The original innerText; */
  private innerText: string;

  /** Approximated character width of the host text */
private approximatedCharacterWidth: number;
//private textLinesLimit: number = 2;
private initialText: string;

  constructor(
    private readonly elementRef: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId
  ) {}

  public ngAfterViewInit(): void {
    this.initialText = this.elementRef.nativeElement.innerText.trim();
    // Clone element to facilitate calculations
  const hostCloneEl = this.elementRef.nativeElement.cloneNode() as HTMLElement;

  // Add 1 character to calculate character width
  hostCloneEl.innerHTML = 'x';

  // Render the clone to get character width
  this.elementRef.nativeElement.parentElement.appendChild(hostCloneEl);

  // Set the clone to inline to prevent cases where the clone
  // expands to 100% width of the container
  hostCloneEl.setAttribute('style', 'display: inline');

  // These are close approximations that are used to better guess
  // how many characters fit in X number of lines
  this.approximatedCharacterWidth = hostCloneEl.offsetWidth;

  // Remove clone after calculations
  hostCloneEl.remove();
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

  
    //this.textLinesLimit=1;

    const visibleCharsLimit= Math.floor(
      (this.elementRef.nativeElement.offsetWidth / this.approximatedCharacterWidth) *
        this.textLinesLimit
    );


       if (this.innerText.length > visibleCharsLimit) {
     const wordCut = false;
     const ellipsis = ' ...';
     const limit = visibleCharsLimit - ellipsis.length;
 
     let visibleText = this.innerText.slice(0, limit);
 
     if (!wordCut) {
       const isEndofWord = this.innerText.substr(limit, limit + 1) === ' ';
       if (!isEndofWord) {
         const previousWord = visibleText.lastIndexOf(' ');
         visibleText = visibleText.slice(0, previousWord);
       }
     }

      this.el.innerHTML = visibleText + ellipsis;
     
    }
  }
}