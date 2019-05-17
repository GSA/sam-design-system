import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-field-input',
  template: `
    <input *ngIf="type !== 'number' else numberTmp" [type]="type" [formControl]="formControl" class="form-control" [formlyAttributes]="field" [class.is-invalid]="showError">
    <ng-template #numberTmp>
      <input type="number" [formControl]="formControl" class="form-control" [formlyAttributes]="field" [class.is-invalid]="showError">
    </ng-template>
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}