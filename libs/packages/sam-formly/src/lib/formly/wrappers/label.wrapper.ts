import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  template: `
    <div class="usa-form-group" [class.usa-form-group--error]="showError">
      <label class="usa-label" *ngIf="to.label && field.type !== ('checkbox' && 'multicheckbox')" [attr.for]="id" [ngClass]="{'usa-sr-only' : to.hideLabel || ((to.group==='panel' || to.group==='accordion') && field?.parent?.fieldGroup?.length === 1) }">
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
