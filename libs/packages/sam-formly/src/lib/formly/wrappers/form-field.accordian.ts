import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';

/**
 * @param {string} [to.label] Text to be shown for the accordion label
 */

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
    <sds-accordion multi="true" displayMode="basic">
      <sds-accordion-item
        class="sds-accordion__panel"
        [expanded]="modelHasValue()"
      >
        <sds-accordion-item-header> {{ to.label }} </sds-accordion-item-header>
        <ng-container #fieldComponent></ng-container>
      </sds-accordion-item>
    </sds-accordion>
  `
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
  constructor() {
    super();
  }
  modelHasValue() {
    if (this.to.hasOwnProperty('expand')) {
      return this.to.expand;
    } else {
      const hasValue =
        this.formControl.value instanceof Object
          ? qs.stringify(this.formControl.value, { skipNulls: true })
          : this.formControl.value;
      return hasValue ? true : false;
    }
  }
}
