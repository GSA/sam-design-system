import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  template: `
    <div>
      <div *ngFor="let option of to.options | formlySelectOptions:field | async; let i = index;" class="usa-checkbox"   >
        <input type="checkbox"
          [id]="id + '_' + i"
          class="usa-checkbox__input"
          [value]="option.value"
          [checked]="formControl.value && (this.to.type === 'array' ? formControl.value.includes(option.value) : formControl.value[option.value])"
          [formlyAttributes]="field"
          (change)="onChange(option.value, $event.target.checked)">
        <label
        class="usa-checkbox__label"
          [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>
    <div>
  `,
})
export class FormlyFieldMultiCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };

  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter(o => o !== value),
      );
    } else {
      this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    }
    this.formControl.markAsTouched();
  }
}