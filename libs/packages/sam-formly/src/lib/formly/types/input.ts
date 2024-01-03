import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-input',
  template: `
  <div style="display: flex; align-items: center;">
    <input #input [ngClass]="{
        'usa-input--disabled': props.disabled,
        'usa-input--error': showError
      }" class="usa-input" [placeholder]="props.placeholder" name="input-success" [formlyAttributes]="field"
        [type]="props.inputType ? props.inputType : 'text'" [formControl]="formControl" [prefix]="props.prefix"
        [suffix]="props.suffix" />
    <div style="display: flex;">
        <ng-container *ngIf="field.formControl.value && !props.disabled">
            <span style="margin-left: -50px; margin-top: 10px;z-index: 1000;">
                <span role="button" aria-label="Clear input" (click)="onClear()" (keyup.enter)="onClear()" tabindex="0"
                    class="icon-container">
                    <usa-icon [icon]="'x'" size="lg" class="font-sans-xs"></usa-icon>
                </span>
            </span>
        </ng-container>
    </div>
</div>`,
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> {
  ngAfterViewInit() {
    const inputs = document.querySelectorAll('input[style]');
    inputs.forEach(input => {
      const parent = input.parentElement;
      const style = input.getAttribute('style');
      parent.setAttribute('style', style);
      input.removeAttribute('style');
    });
  }

  onClear() {
    this.field.formControl.setValue('');
  }
}
