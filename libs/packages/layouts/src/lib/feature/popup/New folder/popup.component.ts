import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'sds-popup',
  templateUrl: './popup.component.html'
})
export class SdsPopupComponent implements OnInit {

  @Input() faicon: any = ['sds', 'information-circle'];

  constructor() { }
  ngOnInit() {

  }

}
