import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-form-field',
  template: `
<div class="usa-form-group" [class.usa-form-group--error]="showError">
  <label class="usa-label" *ngIf="to.label && to.hideLabel !== true" [attr.for]="id">
  <span *ngIf="to.tagText" class="usa-tag"
  [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'">
  {{to.tagText}}</span> 
  <span>{{ to.label }}</span>
    <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
  </label>  

  <label *ngIf="to.hideLabel" [style.display]="to.hideLabel ? 'none' : ''" [attr.for]="id">{{ to.label }}</label>

  <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
    <formly-validation-message [field]="field"></formly-validation-message>
  </div>
  <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
  <ng-template #fieldComponent></ng-template>
</div>
  `,
})
export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent!: ViewContainerRef;
}
