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
          [attr.aria-label]="to.description ? to.description : undefined"
          class="usa-label--description"
          [attr.aria-label]="to.description"
          [id]="id + '-description'"
          [innerHtml]="to.description"
        ></div>
      </ng-container>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class FormlyDescriptionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
