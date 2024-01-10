import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: ` <div class="usa-input-group maxw-mobile-lg position-relative">
    <input
      [ngClass]="{
        'usa-input--disabled': props.disabled,
        'usa-input--error': showError
      }"
      class="usa-input padding-right-3"
      [placeholder]="props.placeholder"
      name="input-success"
      [formlyAttributes]="field"
      [type]="props.inputType ? props.inputType : 'text'"
      [formControl]="formControl"
    />
    <ng-container>
      <div class="usa-input-prefix" aria-hidden="true">
        <span *ngIf="props.prefix && !props.prefixIcon">{{ props.prefix }}</span>
        <span *ngIf="props.prefixIcon && !props.prefix">
          <usa-icon [icon]="props.prefixIcon" size="lg" class="font-sans-xs"></usa-icon>
        </span>
      </div>

      <div class="usa-input-suffix" aria-hidden="true">
        <span
          *ngIf="field.formControl.value && !props.disabled"
          role="button"
          aria-label="Clear input"
          (click)="onClear()"
          (keyup.enter)="onClear()"
          tabindex="0"
          class="icon-container"
        >
          <usa-icon [icon]="'x'" size="lg" class="font-sans-xs"></usa-icon>
        </span>
        <span *ngIf="props.suffix && !props.suffixIcon">{{ props.suffix }}</span>
        <span *ngIf="props.suffixIcon && !props.suffix">
          <usa-icon [icon]="props.suffixIcon" size="lg" class="font-sans-xs"></usa-icon>
        </span>
      </div>
    </ng-container>
  </div>`,
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> {
  onClear() {
    this.field.formControl.setValue('');
  }
}
