import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';

/**
 * @param {string} [to.expand] to expand the accordion
 *
 */

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
    <sds-accordion-next
      [(multi)]="multi"
      expandedHeight="34px"
      collapsedHeight="34px"
      #sdsAccordionDemo
      class="sds-accordion--filters"
    >
      <sds-accordion-item
        class="sds-accordion__panel"
        [expanded]="modelHasValue()"
      >
        <sds-accordion-title> {{ to.label }}</sds-accordion-title>
        <sds-accordion-content>
          <ng-container #fieldComponent></ng-container>
        </sds-accordion-content>
      </sds-accordion-item>
    </sds-accordion-next>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  multi = true;
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
