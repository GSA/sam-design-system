import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param string [to.description] Add a description below the label
 *
 */
@Component({
  template: `
    <div>
      <ng-container *ngIf="to.descriptionTemplate" [ngTemplateOutlet]="to.descriptionTemplate"> </ng-container>
      <ng-container *ngIf="!to.descriptionTemplate">
        <div
          *ngIf="to.description"
          class="usa-label--description"
          [id]="id + '-description'"
          [innerHtml]="to.description"
        ></div>
      </ng-container>

      <div [ngClass]="to.descriptionContentClass">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class FormlyDescriptionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
