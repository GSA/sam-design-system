import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param string [props.description] Add a description below the label
 *
 */
@Component({
  template: `
    <div>
      <ng-container *ngIf="props.descriptionTemplate" [ngTemplateOutlet]="props.descriptionTemplate"> </ng-container>
      <ng-container *ngIf="!props.descriptionTemplate">
        <div
          *ngIf="props.description"
          [attr.aria-label]="props.description ? props.description : undefined"
          class="usa-label--description"
          [attr.aria-label]="props.description"
          [id]="id + '-description'"
          [innerHtml]="props.description"
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
