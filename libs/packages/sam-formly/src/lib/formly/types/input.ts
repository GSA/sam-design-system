import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-field-input',
  template: `
  <label class="usa-label" for="input-success">Text input success</label>
  <input class="usa-input usa-input--success" id="input-success" name="input-success" type="text">
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}