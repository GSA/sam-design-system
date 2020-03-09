import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
<div *ngIf="to.isAccordionFilter">
  <sds-accordion multi="true" displayMode="basic">
    <sds-accordion-item class="sds-accordion__panel">
      <sds-accordion-item-header> {{to.label}} </sds-accordion-item-header>
      <ng-container #fieldComponent></ng-container>
    </sds-accordion-item>
  </sds-accordion>
</div>
<div class="wrapper-body" *ngIf="!to.isAccordionFilter">
  <div class="sds-accordion__trigger header-label" [attr.aria-hidden]="to.ariaHidden ? 'false' : 'true'"> {{to.label}} </div>
  <ng-container #fieldComponent></ng-container>
</div>
  `,
})
export class FormlyGroupWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}