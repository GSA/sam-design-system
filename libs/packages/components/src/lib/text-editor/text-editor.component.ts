import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'sds-text-editor',
  templateUrl: './text-editor.component.html',
  
})
export class SdsTextEditorComponent implements OnInit {

  
  TextData: string;
  readonly: boolean;
  editorData: string;
 
  // tslint:disable-next-line: no-input-rename
  @Input("Textdata") TextEditordata: string;
 
  // tslint:disable-next-line: no-input-rename
  @Input("ngModelData") ngModelData: string;
 
  @Output() TextEditerOnChange: EventEmitter<any> = new EventEmitter();
  @Output() TextEditorDataChange: EventEmitter<any> = new EventEmitter();
  @Output() TextEditorOnFocus: EventEmitter<any> = new EventEmitter();
  @Output() TextEditorOnBlur: EventEmitter<any> = new EventEmitter();

  constructor() {}
 
  ngOnInit() {}



  // public onChange(event: CKEditor4.EventInfo) {
  //   console.log(event.editor.getData());
  // }

  onBlurEvent(event: CKEditor4.EventInfo) {
    this.TextEditorOnBlur.emit(event.editor.getData());
  }
 
  onFocusChange(event: CKEditor4.EventInfo) {
    this.TextEditorOnFocus.emit(event.editor.getData());
  }
    public onChange( event: CKEditor4.EventInfo ) {
      this.TextEditerOnChange.emit(event.editor.getData());
  }
 
  onDataChange(event: CKEditor4.EventInfo) {
    this.TextEditorDataChange.emit(event.editor.getData());
  }
 
}
