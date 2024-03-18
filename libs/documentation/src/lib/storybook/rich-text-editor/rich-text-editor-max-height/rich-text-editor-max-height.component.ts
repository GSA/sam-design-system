import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'sds-rich-text-editor-max-height',
  templateUrl: './rich-text-editor-max-height.component.html',
})
export class RichTextEditorMaxHeightComponent {
  public data = '';
  fc: UntypedFormControl = new UntypedFormControl('<p>this is a test</p>');
}
