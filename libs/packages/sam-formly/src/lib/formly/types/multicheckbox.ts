import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-multicheckbox',
  template: `
  <div *ngFor="let option of to.options | formlySelectOptions:field | async; let i = index;" class="usa-checkbox">
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

<div *ngFor="let chip of selectedValues">
  <span class="sds-tag sds-tag--chip"> {{chip}}
      <button class="sds-tag__close" aria-label="Close" (click)="onClose(chip)">
          <fa-icon [icon]="['fas', 'times']"></fa-icon>
      </button>
  </span>
</div>
  `,
})
export class FormlyFieldMultiCheckboxComponent extends FieldType {
  public selectedValues: string[] = [];
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };

  onChange(value: any, checked: boolean) {
    if (checked) {
      this.selectedValues.push(value);
    } else {
      this.removeElement(value);
    }
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

  onClose(el) {
    this.removeElement(el);
    this.formControl.patchValue({ ...this.formControl.value, [el]: false });
  }

  removeElement(element) {
    const index = this.selectedValues.indexOf(element);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
    }
  }
}