import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
    <input
      [ngClass]="{
        'usa-input--disabled': props.disabled,
        'usa-input--error': showError
      }"
      class="usa-input"
      [placeholder]="props.placeholder"
      name="input-success"
      [formlyAttributes]="field"
      [type]="props.inputType ? props.inputType : 'text'"
      [formControl]="formControl"
    />
  `,
})
export class FormlyFieldInputComponent extends FieldType {
 defaultOptions = {
    defaultValue: {},
  };
}
