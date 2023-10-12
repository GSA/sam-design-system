import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-button',
  template: `
    <button [type]="props.type" [ngClass]="'btn btn-' + props.btnType" (click)="onClick($event)" class="usa-button--unstyled">
      {{ props.text }}
    </button>
  `,
})
export class FormlyFieldButtonComponent extends FieldType {
  onClick($event) {
    if (this.props.onClick) {
      this.props.onClick($event);
    }
  }
}
