import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sds-text-child',
  template: `
    <ng-container *ngIf="items">
      <span class="sds-tag sds-tag--chip margin-x-05" style="cursor:pointer;" *ngFor="let item of items; let i=index" (click)="removeItem(i)">{{item}} <small class="margin-left-05">(x)</small></span>
    </ng-container>
  `
})
export class SdsTextChildComponent  {
    @Input() items;
    @Output() itemsChange = new EventEmitter();

    removeItem(index){
      this.items.splice(index, 1);
      this.itemsChange.emit(this.items);
    }

}

