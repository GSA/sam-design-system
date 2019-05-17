import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-field-input',
  template: `
  <label class="usa-label" for="input-success">{{to.label}}</label>
  <span class="usa-error-message" id="input-error-message" role="alert">{{to.errorMessage}}</span>
  <input class="usa-input usa-input--{{to.inputStyle}}" id="input-success" [placeholder]="to.placeholder" name="input-success" [type]="to.inputType">
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}