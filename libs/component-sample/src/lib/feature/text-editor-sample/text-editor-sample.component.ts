import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-text-editor-sample',
  templateUrl: './text-editor-sample.component.html'
})
export class TextEditorSampleComponent {
  public sdsTextEditor: string;
  public modelData: string;
  constructor() { }
 
  OnInit() {
      this.sdsTextEditor = 'Hello Text Editor!';

  }
 
  TxtEdtOnBlur(event: any) {
    // console.log(event);
  }
 
  TxtEdtOnFocus(event: any){
    // console.log(event);
  }
 
  TxtEdtEventData(event: any){
    // console.log(event);
  }
 
  TxtEdtDataChange(event: any) {
 
  }



}
