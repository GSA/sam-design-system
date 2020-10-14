import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param {string} [to.required] Makes the field required
 */
@Component({
  template: `
    <ng-container #fieldComponent></ng-container>
    <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>
  `,
})
export class FormlyValidationWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
