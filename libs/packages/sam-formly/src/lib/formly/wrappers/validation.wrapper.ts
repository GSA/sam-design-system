


import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-label-wrapper-form-field',
  template: `
  <ng-template #fieldComponent></ng-template>
  <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
    <formly-validation-message [field]="field"></formly-validation-message>
  </div>
  `,
})
export class FormlyValidationWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
