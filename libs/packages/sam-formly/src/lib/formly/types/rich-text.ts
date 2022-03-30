import { Component } from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';

@Component({
  selector: 'sds-formly-rich-text-editor',
  template: `
  <sds-rich-text
    [formControl]="formControl"
    [minHeight]="to.minHeight"
    [maxHeight]="to.maxHeight"
    >
  </sds-rich-text>
  `,
})
export class FormlyFieldRichTextEditorComponent extends AbstractSdsFormly {
}
