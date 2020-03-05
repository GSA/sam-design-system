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
            <a *ngIf="isCollapsable" (click)="isCollapsed =! isCollapsed">...Read {{isCollapsed? 'more':'less'}}</a>
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
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
    @Input() maxHeight: number = 60;

  
    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;
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
        const text = this.innerText.split(' ');
        this.el.style.maxHeight="60px";

        let currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;

        if (text.length > 0 && currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        }
    }
}