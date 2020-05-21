import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param {string} [to.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param {string} [to.tagText] Text to be shown inside the tag
 * @param {string} [to.ariaHidden] Hide the label
 * @param {string} [to.labelClass] Class to be applied to the label
 * @param {string} [to.label] Text to be shown for the label
 * @param {string} [to.required] Makes the field required
 * @param {string} [to.description] Add a description below the label
 * @param {string} [to.hideOptional] Remove the optional text
 * @param {string} [to.hideLabel] Hide the label
 * 
 */
@Component({
  template: `
    <div class="usa-form-group" [class.usa-form-group--error]="showError">
      <label class="usa-label" *ngIf="to.label && field.type !== 'checkbox'" [attr.for]="id" [ngClass]="{'usa-sr-only' : to.hideLabel || ((to.group==='panel' || to.group==='accordion') && field?.parent?.fieldGroup?.length === 1) }">
        <span *ngIf="to.tagText" class="usa-tag"  [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'">{{to.tagText}}</span>
        <span>{{ to.label }}</span>
        <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
      </label>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class FormlyLabelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
