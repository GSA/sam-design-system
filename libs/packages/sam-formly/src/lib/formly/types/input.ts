import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
  <input [class.usa-input--error]="showError" class="usa-input" [placeholder]="to.placeholder" name="input-success" [formlyAttributes]="field" [type]="to.inputType" [formControl]="formControl">
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}