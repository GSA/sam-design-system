import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'sds-popup',
  templateUrl: './popup.component.html'
})
export class SdsPopupComponent implements OnInit {

  @Input() model;
  @Input() size: string;
  @Input('icon') faicon: string;
  @Output() clicks = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  
  }

}