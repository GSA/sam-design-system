import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-checkbox',
  template: `
  <div class="grid-row">
    <div class="usa-checkbox"
      [class.text-align-end]="to.textAlignEnd"
    >
      <input class="usa-checkbox__input" type="checkbox"
        [class.is-invalid]="showError"
        [indeterminate]="to.indeterminate && formControl.value === null"
        [formControl]="formControl"
        [formlyAttributes]="field" >
      <label  class="usa-checkbox__label" [for]="id">
        {{ to.label }}
        <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
      </label>
    </div>
    <div *ngIf="to.tooltipText" class="sds-stack margin-top-205 margin-left-1" [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle" [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0" aria-label="info tooltip">
        <usa-icon [size]="'lg'" [icon]="'info-circle-fill'"></usa-icon>
    </div>
</div>
  `,
})
export class FormlyFieldCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true,
    },
  };
}
