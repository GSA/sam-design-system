import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-field-input',
  template: `
  <input [class.usa-input--error]="showError" class="usa-input" id="input-success" [placeholder]="to.placeholder" name="input-success" [type]="to.inputType" [formControl]="formControl">
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}