import {
    Component,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter,
    Input,
    Inject,
    PLATFORM_ID,
    HostListener,
    AfterViewInit
  } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';

  @Component({
    selector: 'sds-read-more',
    template: `
        <div [innerHTML]="text" [class.collapsed]="isCollapsed" [style.height]="isCollapsed ? maxHeight+'px' : 'auto'"> 
        </div>
         <span  *ngIf="isCollapsed">...</span>
    
        <div class="showReadMore"><a class="readLink" *ngIf="isCollapsable" (click)="isCollapsed =! isCollapsed">Read {{isCollapsed? 'more':'less'}}</a></div>
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
            display: inline-block;
            text-align: justify;
        }
        a.readLink{
            color:#009ec1;
        }
        div.showReadMore{
            margin-top: 15px;
        }
    `]
})
export class SdsReadMoreComponent implements AfterViewInit {

    private get el(): HTMLElement {
        return this.elementRef.nativeElement;
      }
    //the text that need to be put in the container
    @Input() text: string; 

    //maximum height of the container
    @Input() maxHeight:number;

  
    public isCollapsed:boolean = false;
    public isCollapsable:boolean = false;
    private innerText: string;

      /** Approximated character width of the host text */
private approximatedCharacterWidth: number;
private textLinesLimit: number = 2;
private initialText: string;

    constructor(private elementRef: ElementRef,
        @Inject(PLATFORM_ID) private readonly platformId) {
    }
    @HostListener('window:resize')
    public onWindowResize() {
      this.truncate();
    }
    ngAfterViewInit() {
        setTimeout(() =>{

        this.initialText = this.elementRef.nativeElement.innerText.trim();
    // Clone element to facilitate calculations
  const hostCloneEl = this.elementRef.nativeElement.cloneNode() as HTMLElement;

  // Add 1 character to calculate character width
  hostCloneEl.innerHTML = 'x';

  // Render the clone to get character width
  this.elementRef.nativeElement.parentElement.appendChild(hostCloneEl);

  // expands to 100% width of the container
  hostCloneEl.setAttribute('style', 'display: inline');

  // how many characters fit in X number of lines
  this.approximatedCharacterWidth = hostCloneEl.offsetWidth;

  // Remove clone after calculations
  hostCloneEl.remove();
        this.truncate();});
    }

    private truncate(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
          }
        if (this.innerText === undefined) {
            this.innerText = this.el.innerText.trim();
          }

        const visibleCharsLimit= Math.floor(
          (this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetWidth / this.approximatedCharacterWidth) *
            this.textLinesLimit
        );
    
    
           if (this.innerText.length > visibleCharsLimit) {
         const wordCut = false;
         const ellipsis = '...';
         const limit = visibleCharsLimit - ellipsis.length;
     
         let visibleText = this.innerText.slice(0, limit);
     
         if (!wordCut) {
           const isEndofWord = this.innerText.substr(limit, limit + 1) === ' ';
           if (!isEndofWord) {
             const previousWord = visibleText.lastIndexOf(' ');
             visibleText = visibleText.slice(0, previousWord);


           }
         }
         this.isCollapsed = true;
         this.isCollapsable = true;

         const hostCloneEl = this.elementRef.nativeElement.cloneNode() as HTMLElement;

  // Add 1 character to calculate character width
  hostCloneEl.innerHTML = visibleText;

  // Render the clone to get character width
  this.elementRef.nativeElement.parentElement.appendChild(hostCloneEl);

  // Set the clone to inline to prevent cases where the clone
  // expands to 100% width of the container
  hostCloneEl.setAttribute('style', 'display: inline');

  // These are close approximations that are used to better guess
  // how many characters fit in X number of lines
  //this.approximatedCharacterWidth = hostCloneEl.offsetWidth;
  this.maxHeight=hostCloneEl.offsetHeight;
  // Remove clone after calculations
  hostCloneEl.remove();
         

        }
       else{
       this.isCollapsed = false;
       this.isCollapsable = false;
       }
    }
}