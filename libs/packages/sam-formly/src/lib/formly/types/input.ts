import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
  <input [class.usa-input--error]="showError" class="usa-input" [placeholder]="to.placeholder" name="input-success" [formlyAttributes]="field" [type]="to.inputType? to.inputType : 'text'" [formControl]="formControl">
  `,
})
export class FormlyFieldInputComponent extends FieldType { }