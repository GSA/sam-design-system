import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param string [to.description] Add a description below the label
 *
 */
@Component({
  template: `
    <div>
      <div
        *ngIf="to.description"
        class="form-text text-muted"
        [id]="id + '-description'"
      >
        {{ to.description }}
      </div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class FormlyDescriptionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
