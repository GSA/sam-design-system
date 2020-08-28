import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  selector: 'sam-formly-filter-wrapper-form-field',
  template: `
  <sds-accordion multi="true" displayMode="basic">
    <sds-accordion-item class="sds-accordion__panel">
      <sds-accordion-item-header> {{to.label}} </sds-accordion-item-header>
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
    </sds-accordion-item>
  </sds-accordion>
  `,
})
export class FormlyCustomWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef, static: false}) fieldComponent: ViewContainerRef;
}
