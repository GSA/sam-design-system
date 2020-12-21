import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param {string} [to.description] Add a description below the label
 *
 */
@Component({
  template: `
    <div>
      <small *ngIf="to.description" class="form-text text-muted">{{
        to.description
      }}</small>
      <ng-container #fieldComponent></ng-container>
    </div>
  `
})
export class FormlyDescriptionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: false })
  fieldComponent: ViewContainerRef;
}
