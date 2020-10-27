import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-file',
  template: `
  <div class="grid-container width-tablet margin-top-1 margin-auto">
  <div class="grid-row grid-gap">
  <ng-container
    *ngFor="
      let option of (to.options | formlySelectOptions: field | async);
      let i = index
    "
  > 
  <div class="grid-col">
  <label [for]="id + '_' + i">
    <div
      class="sds-button sds-button--icon-lg"
      [ngClass]="{ 'sds-button--icon-lg--selected': formControl.value == option.value }"
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
  
        <div class="sds-button__header">
          <fa-icon [icon]="['sds',  to.options[i].icon]" class="text-base"  size="2x">
          </fa-icon>
        </div>
      <div class="sds-button__body">
        <span class="usa-tag">{{to.options[i].key}}</span>
        <span>{{ to.options[i].description}}</span>
      </div>
    
      </div>
      </label>
      </div>
      </ng-container>
      </div>
</div>
  `,
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
