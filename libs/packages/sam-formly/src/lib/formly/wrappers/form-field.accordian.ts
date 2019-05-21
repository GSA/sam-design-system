
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
  <sds-accordion multi="true">
    <sds-accordion-item>
      <sds-accordion-item-header> {{to.label}} </sds-accordion-item-header>
    <sam-formly-wrapper-form-field #fieldComponent1></sam-formly-wrapper-form-field>
    </sds-accordion-item>
  </sds-accordion>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
 @ViewChild('fieldComponent1', { read: ViewContainerRef }) fieldComponent1!: ViewContainerRef;
}