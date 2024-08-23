import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
    <div class="usa-input-group maxw-mobile-lg">
      <div *ngIf="props.prefix || props.prefixIcon" class="usa-input-prefix" aria-hidden="true">
        <span *ngIf="props.prefixIcon && !props.prefix" (click)="onPrefixClick($event)">
          <usa-icon [icon]="props.prefixIcon" size="lg" class="font-sans-xs"></usa-icon>
        </span>
      </div>
      <input
        [id]="id"
        class="usa-input"
        [ngClass]="{
          'usa-input--disabled': props.disabled,
          'usa-input--error': showError,
        }"
        [formlyAttributes]="field"
        [type]="props.inputType ? props.inputType : 'text'"
        [formControl]="formControl"
      />
      <div
        *ngIf="props.suffix || props.suffixIcon || field.formControl.value"
        class="usa-input-suffix"
        aria-hidden="true"
      >
        <span *ngIf="props.suffix && !props.suffixIcon" (click)="onSuffixClick($event)">{{ props.suffix }}</span>
        <span *ngIf="props.suffixIcon && !props.suffix" (click)="onSuffixClick($event)">
          <usa-icon [icon]="props.suffixIcon" size="lg" class="font-sans-xs"></usa-icon>
        </span>
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
      </div>
    </div>
  `,
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> {
  onClear() {
    this.field.formControl.setValue('');
    this.field.focus = true;
  }

  onSuffixClick(ev) {
    if (this.props.onSuffixClick) {
      this.props.onSuffixClick(ev);
    }
  }

  onPrefixClick(ev) {
    if (this.props.onPrefixClick) {
      this.props.onPrefixClick(ev);
    }
  }
}
