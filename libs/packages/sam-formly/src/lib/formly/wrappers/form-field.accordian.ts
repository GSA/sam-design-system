import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';

/**
 * @param string [to.expand] to expand the accordion
 *
 */

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
    <usa-accordion #groupAccordion [singleSelect]="!multi" class="sds-accordion--filters">
      <usa-accordion-item [expanded]="modelHasValue()"]>
        <ng-template UsaAccordionHeader>
          <span [attr.class]="to.labelClass">{{ to.label }}</span>
        </ng-template>
        <ng-template UsaAccordionContent>
          <ng-container #fieldComponent></ng-container>
        </ng-template>
      </usa-accordion-item>
    </usa-accordion>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
  multi = true;
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
