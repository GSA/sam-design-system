import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-button',
  template: `
    <button [type]="to.type" [ngClass]="'btn btn-' + to.btnType" (click)="onClick($event)" class="usa-button--unstyled">
      {{ to.text }}
    </button>
  `,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldButtonComponent extends FieldType {
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
