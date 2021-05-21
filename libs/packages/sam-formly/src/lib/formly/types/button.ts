import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-button',
  template: `
      <button [type]="to.type ? to.type : 'button'" [attr.class]="'usa-button' + (to.btnType ? (' usa-button--' + to.btnType) : '')" (click)="onClick($event)">
        {{ to.text }}
      </button>
  `,
})
export class FormlyFieldButtonComponent extends FieldType {
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}