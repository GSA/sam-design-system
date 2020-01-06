import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sds-popup',
  templateUrl: './popup.component.html',
  styleUrls:['./popup.component.scss']
})
export class SdsPopupComponent  {
  @Input() model;
  @Input() size: string;
  @Output() clicks = new EventEmitter<string>();
  constructor() { }

  

}
