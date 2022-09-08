import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-file',
  template: `
    <div class="sds-card__container grid-row grid-gap margin-top-1">
      <div *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index">
      <h3 class="sds-card__title--file">{{ option.label }}</h3>
        <div
          class="sds-card__file mobile-lg:grid-col"
          [ngClass]="{ 'sds-card-selected': formControl.value == option.value }"
          tabindex="0"
          (keyup.enter)="formControl.setValue(option.value)"
          [attr.aria-label]="option.label + ' ' + option.value"
        >
          <input
            tabindex="-1"
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
            <usa-icon [icon]="'filetype-csv'"></usa-icon>
            </div>
            <div class="sds-card__body sds-card__header--center padding-top-1 padding-bottom-1">
              <span class="bg-base-light margin-bottom-1 padding-1 padding-left-4 padding-right-4">{{ option.value }}</span>
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
    `,
  ],
})
export class FormlyFieldFileInfoComponent extends FieldType {
  isSelected: boolean = false;
  description: string = '';
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
