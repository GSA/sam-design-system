import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'sds-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: []
})
export class SdsRichTextComponent  {
  public editor = ClassicEditor;

  @Input() data: any = "";

  @Output() change: EventEmitter<any>
  @Output() blur: EventEmitter<any>
  @Output() focus: EventEmitter<any>
  @Output() error: EventEmitter<any>


}

