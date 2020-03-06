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
    selector: 'sds-read-more ',
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
        }
        a.readLink{
            color:blue;
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
    @Input() maxHeight = 60;

  
    public isCollapsed = false;
    public isCollapsable = false;
    private innerText: string;

    constructor(private elementRef: ElementRef,
        @Inject(PLATFORM_ID) private readonly platformId) {
    }
    @HostListener('window:resize')
    private onWindowResize() {
      this.truncate();
    }
    ngAfterViewInit() {
        this.truncate();
    }
    private truncate(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
          }
        if (this.innerText === undefined) {
            this.innerText = this.el.innerText.trim();
          }
        const textContent = this.innerText.split(' ');
        this.el.style.maxHeight="60px";

        const currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
        if (textContent.length > 0 && currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        }
       
    }
}