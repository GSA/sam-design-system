
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-label-wrapper-form-field',
  template: `
  <div class="usa-form-group" [class.usa-form-group--error]="showError">
  <label class="usa-label" *ngIf="to.label && to.hideLabel !== true" [attr.for]="id" [ngClass]="to.labelClass">
    <span *ngIf="to.tagText" class="usa-tag"  [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'">{{to.tagText}}</span> 
    <span>{{ to.label }}</span>
    <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
  </label>  
  <ng-template #fieldComponent></ng-template>
</div>

  `,
})
export class FormlyLabelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
