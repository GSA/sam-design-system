import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-select',
  template: `
    <select
      *ngIf="to.multiple; else singleSelect"
      multiple
      [class.custom-select]="to.customSelect"
      [formControl]="formControl"
      [class.is-invalid]="showError"
      [formlyAttributes]="field"
    >
      <ng-container
        *ngFor="let item of to.options | formlySelectOptions: field | async"
      >
        <optgroup *ngIf="item.group" label="{{ item.label }}">
          <option
            *ngFor="let child of item.group"
            [ngValue]="child.value"
            [disabled]="child.disabled"
          >
            {{ child.label }}
          </option>
        </optgroup>
        <option
          *ngIf="!item.group"
          [ngValue]="item.value"
          [disabled]="item.disabled"
          >{{ item.label }}</option
        >
      </ng-container>
    </select>
    <ng-template #singleSelect>
      <select
        class="usa-select"
        [formControl]="formControl"
        [class.custom-select]="to.customSelect"
        [class.is-invalid]="showError"
        [formlyAttributes]="field"
      >
        <option *ngIf="to.placeholder" [ngValue]="null">{{
          to.placeholder
        }}</option>
        <ng-container
          *ngFor="let item of to.options | formlySelectOptions: field | async"
        >
          <optgroup *ngIf="item.group" label="{{ item.label }}">
            <option
              *ngFor="let child of item.group"
              [ngValue]="child.value"
              [disabled]="child.disabled"
            >
              {{ child.label }}
            </option>
          </optgroup>
          <option
            *ngIf="!item.group"
            [ngValue]="item.value"
            [disabled]="item.disabled"
            >{{ item.label }}</option
          >
        </ng-container>
      </select>
    </ng-template>
  `,
})
export class FormlyFieldSelectComponent extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
