import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-rich-text-editor',
  template: `
  <sds-rich-text
    [formControl]="formControl"
    [minHeight]="to.minHeight"
    [maxHeight]="to.maxHeight">
  </sds-rich-text>
  `,
})
export class FormlyFieldRichTextEditorComponent extends FieldType {
}
