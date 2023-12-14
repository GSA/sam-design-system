import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param string [props.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param string [props.tagText] Text to be shown inside the tag
 * @param string [props.labelClass] Class to be applied to the label
 * @param string [props.label] Text to be shown for the label
 * @param string [props.required] Makes the field required
 * @param string [props.description] Add a description below the label
 * @param string [props.hideOptional] Remove the optional text
 * @param string [props.hideLabel] Hide the label
 *
 */

@Component({
  selector: 'sds-formly-wrapper-form-field',
  template: `
    <div class="usa-form-group" [class.usa-form-group--error]="showError">
      <label
        class="usa-label"
        *ngIf="props.label && props.hideLabel !== true"
        [attr.for]="id"
        [ngClass]="props.labelClass"
      >
        <span
          *ngIf="props.tagText"
          class="usa-tag"
          [ngClass]="props.tagClass ? props.tagClass : 'sds-tag--info-white'"
          >{{ props.tagText }}</span
        >
        <span>{{ props.label }}</span>
        <span *ngIf="!props.required && !props.hideOptional"> (Optional)</span>
      </label>
      <div *ngIf="props.description" class="usa-label--description">
        {{ props.description }}
      </div>
      <ng-template #fieldComponent></ng-template>
      <div *ngIf="showError" class="usa-error-message" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
})
export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent!: ViewContainerRef;
}
