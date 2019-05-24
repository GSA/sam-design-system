import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-subheader-sample',
  templateUrl: 'subheader-sample.component.html'
})

export class SubheaderSampleComponent implements OnInit {
  // extraItems: string[] = new Array(50).fill('Hello World');
  menuOpened(){
    console.log("Menu Opened");
  }
  menuClosed(){
    console.log("Menu closed");
  }
  constructor() { 
  }

  ngOnInit() { }
}