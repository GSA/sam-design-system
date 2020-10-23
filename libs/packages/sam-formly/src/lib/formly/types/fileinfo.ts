import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sds-formly-field-file',
  template: `
    <div class="grid-row grid-gap margin-top-1">
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
          <button class="sds-button sds-button--icon-lg">
          <div class="sds-button__header">
          <fa-icon [icon]="['sds',  to.additionalProperties[i].icon]" class="text-base"  size="2x"></fa-icon>
        
          </div>
          <div class="sds-button__body">
            <span class="usa-tag">{{to.options[i].key}}</span>
            <span>{{ to.options[i].description}}</span>
          </div>
        </button>
          </label>

        </div>
      </div>
    </div>
  `,
  styles: [
    `.sds-button.sds-button--icon-lg .usa-tag {
      color: white;
      font-style: normal;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    
    .sds-card{
      border:none;
      box-shadow:none;
    }
      .sds-button.sds-button--icon-lg {
        width: 100%;
        text-align: center;
        display: flex;
      }

    .sds-button.sds-button--icon-lg .sds-button__body {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
     }

    .sds-button.sds-button--icon-lg {
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
    `
  ]
})
export class FormlyFieldFileInfoComponent extends FieldType {
  isSelected: boolean = false;
  description: string = '';
  defaultOptions = {
    templateOptions: {
      options: []
    }
  };
}
