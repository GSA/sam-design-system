
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import * as qs from 'qs';
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