import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-wrapper-form-field',
  template: `
  <div class="usa-form-group" [class.usa-form-group--error]="showError">
  <label class="usa-label" *ngIf="to.label && to.hideLabel !== true" [attr.for]="id">
    {{ to.label }}
    <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
  </label>
      <ng-template #fieldComponent></ng-template>
      <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
    <formly-validation-message [field]="field"></formly-validation-message>
  </div>
  <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
</div>
  `,
})
export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent!: ViewContainerRef;
}