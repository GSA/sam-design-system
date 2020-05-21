
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import * as qs from 'qs';

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
  selector: 'sam-formly-accordian-form-field',
  template: `
  <sds-accordion multi="true" displayMode="basic">
    <sds-accordion-item class="sds-accordion__panel" [expanded]="modelHasValue()">
      <sds-accordion-item-header> {{to.label}}
      </sds-accordion-item-header>
      <ng-container #fieldComponent></ng-container>
    </sds-accordion-item>
  </sds-accordion>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
  constructor() {
    super();
  }
  modelHasValue() {
    const hasValue= qs.stringify(this.model, { skipNulls: true});
    return this.to.expand  ? true : hasValue ? true : false;
  }
}
