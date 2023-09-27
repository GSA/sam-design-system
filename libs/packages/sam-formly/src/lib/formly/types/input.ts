import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
 template: `
<div class="maxw-mobile-lg position-relative">
    <input [ngClass]="{
          'usa-input--disabled': to.disabled,
          'usa-input--error': showError
        }" class="usa-input padding-right-3" [placeholder]="to.placeholder" name="input-success"
      [formlyAttributes]="field" [type]="to.inputType ? to.inputType : 'text'" [formControl]="formControl" />
  <ng-container *ngIf="field.formControl.value">
    <span class="position-absolute right-105 top-1 cursor-pointer bg-white">
      <span role="button" aria-label="Clear input" (click)="field.formControl.reset()" (keyup.enter)="field.formControl.reset()" tabindex="0"
        class="icon-container">
        <usa-icon [icon]="'x'" size="lg" class="font-sans-xs"></usa-icon>
      </span>

    </span>
  </ng-container>
</div>`
})
export class FormlyFieldInputComponent extends FieldType {}
