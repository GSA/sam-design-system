import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { sdsDrawerAnimation } from '../drawer/drawer-animation';

@Component({
  selector: 'sds-drawer',
  templateUrl: 'drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [sdsDrawerAnimation.transformDrawer],
})
export class SdsDrawerComponent {
  /**
  * Allow to insert a customized template for suggestions to use
  */
 @Input() contentTemplate: TemplateRef<any>;
 @Output() isDrawerOpen = new EventEmitter<number>();
 @ViewChild('drawer') drawer: ElementRef;
 
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.cdRef.detectChanges();
        this.isDrawerOpen.emit(this.drawer.nativeElement.offsetHeight);
    }, 100);
  }
  constructor(private cdRef:ChangeDetectorRef) {}
}
