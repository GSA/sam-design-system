import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-radio',
  template: `
    <div class="usa-radio">
      <div
        *ngFor="
          let option of to.options | formlySelectOptions: field | async;
          let i = index
        "
      >
        <input
          type="radio"
          [id]="id + '_' + i"
          class="usa-radio__input"
          [name]="id"
          [class.usa-input--error]="showError"
          [attr.value]="option.value"
          [value]="option.value"
          [formControl]="formControl"
          [formlyAttributes]="field"
        />
        <label class="usa-radio__label" [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>
    </div>
  `,
})
export class FormlyFieldRadioComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
