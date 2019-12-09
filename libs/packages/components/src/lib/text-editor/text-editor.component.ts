import { Component, OnInit, Input } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'sds-text-editor',
  templateUrl: './text-editor.component.html',
  inputs:['typeOfEditor']
})
export class SdsTextEditorComponent implements OnInit {

  @Input('editorData') ckEditorData: any;


  constructor() { 

  }
 
  public editorData = '<p>Hello, world!</p>';
  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  ngOnInit() {
  }

  public onChange(event: CKEditor4.EventInfo) {
    console.log(event.editor.getData());
  }

}
