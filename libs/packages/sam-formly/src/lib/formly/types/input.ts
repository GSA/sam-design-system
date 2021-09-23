import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
  <div class="grid-row">
    <input
      [ngClass]="{
        'usa-input--disabled': to.disabled,
        'usa-input--error': showError
      }"
      class="usa-input"
      [placeholder]="to.placeholder"
      name="input-success"
      [formlyAttributes]="field"
      [type]="to.inputType ? to.inputType : 'text'"
      [formControl]="formControl"
    />
    <span *ngIf="to.tooltipText" class="sds-stack padding-top-105 margin-left-1"
        [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle"
        [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0"
        aria-label="info tooltip">
        <usa-icon [size]="'lg'" [icon]="'info-circle-fill'"></usa-icon>
      </span>
    </div>
  `,
})
export class FormlyFieldInputComponent extends FieldType { }
