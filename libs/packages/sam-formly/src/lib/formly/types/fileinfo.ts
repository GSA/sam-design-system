import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-file',
  template: `
    <div class="grid-row grid-gap padding-1">
      <div
        *ngFor="
          let option of (to.options | formlySelectOptions: field | async);
          let i = index
        "
      >
        <div
          class="sds-card mobile-lg:grid-col"
          [ngClass]="{ 'sds-card-selected': formControl.value == option.value }"
        >
          <input
            type="radio"
            [id]="id + '_' + i"
            class="usa-sr-only usa-radio__input"
            [name]="id"
            [class.usa-input--error]="showError"
            [attr.value]="option.value"
            [value]="option.value"
            [formControl]="formControl"
            [formlyAttributes]="field"
          />
          <label [for]="id + '_' + i">
            <div class="sds-card__header sds-card__header--center">
              <h3 class="sds-card__title ">{{ option.label }}</h3>
            </div>
            <div class="sds-card__body sds-card__header--center">
              <span class="usa-tag padding-left-05">{{ option.value }}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .sds-card-selected {
        border-color: #2672de !important;
        border-width: 2px !important;
      }
    `
  ]
})
export class FormlyFieldFileInfoComponent extends FieldType {
  isSelected: boolean = false;
  defaultOptions = {
    templateOptions: {
      options: []
    }
  };
}
