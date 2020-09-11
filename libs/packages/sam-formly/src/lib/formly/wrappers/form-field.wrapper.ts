import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param {string} [to.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param {string} [to.tagText] Text to be shown inside the tag
 * @param {string} [to.labelClass] Class to be applied to the label
 * @param {string} [to.label] Text to be shown for the label
 * @param {string} [to.required] Makes the field required
 * @param {string} [to.description] Add a description below the label
 * @param {string} [to.hideOptional] Remove the optional text
 * @param {string} [to.hideLabel] Hide the label
 * 
 */

@Component({
  selector: 'sds-formly-wrapper-form-field',
  template: `
<div class="usa-form-group" [class.usa-form-group--error]="showError">
  <label class="usa-label" *ngIf="to.label && to.hideLabel !== true" [attr.for]="id" [ngClass]="to.labelClass">
    <span *ngIf="to.tagText" class="usa-tag"  [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'">{{to.tagText}}</span>
    <span>{{ to.label }}</span>
    <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
  </label>
  <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
  <ng-template #fieldComponent></ng-template>
  <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
    <formly-validation-message [field]="field"></formly-validation-message>
  </div>
</div>
  `,
})

export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent!: ViewContainerRef;
}
