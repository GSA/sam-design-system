
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
  <sds-accordion multi="true" displayMode="basic">
    <sds-accordion-item class="sds-accordion__panel" [expanded]="hasValue()">
      <sds-accordion-item-header> {{to.label}} </sds-accordion-item-header>
      <ng-container #fieldComponent></ng-container>
    </sds-accordion-item>
  </sds-accordion>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
  // constructor(public wrap: FieldWrapper) {
  //   super();
  // }
  hasValue(){
   // console.log(this.wrap , 'wrapper')
    return true;
  }
}