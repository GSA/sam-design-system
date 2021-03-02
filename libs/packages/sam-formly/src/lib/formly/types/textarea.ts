import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-textarea',
  template: `
    <textarea [formControl]="formControl" [cols]="to.cols"
      [rows]="to.rows" class="usa-textarea" [class.usa-input--error]="showError"
      [placeholder]="to.placeholder"
      [formlyAttributes]="field">
    </textarea>
  `,
})
export class FormlyFieldTextAreaComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  };
}