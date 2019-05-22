import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-field-textarea',
  template: `
    <textarea [formControl]="formControl" [cols]="to.cols"
      [rows]="to.rows" class="usa-textarea" [class.usa-input--error]="showError"
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