import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'sds-rich-text-editor-min-height',
  templateUrl: './rich-text-editor-min-height.component.html',
})
export class RichTextEditorMinHeightComponent {
  public data = '';
  fc: UntypedFormControl = new UntypedFormControl('<p>this is a test</p>');
}
