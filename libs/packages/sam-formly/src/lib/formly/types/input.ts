import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
    <input
      [ngClass]="{
        'usa-input--disabled': to.disabled,
        'usa-input--error': showError
      }"
      class="usa-input"
      [placeholder]="to.placeholder"
      name="input-success"
      [attr.aria-describedby]="to.description ? to.description : undefined"
      [formlyAttributes]="field"
      [type]="to.inputType ? to.inputType : 'text'"
      [formControl]="formControl"
      [prefix]=to.prefix
      [suffix]=to.suffix 
    />
  `,
})
export class FormlyFieldInputComponent extends FieldType {}
