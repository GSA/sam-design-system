import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param string [to.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param string [to.tagText] Text to be shown inside the tag
 * @param string [to.label] Text to be shown for the label
 * @param string [to.required] Makes the field required
 * @param string [to.hideOptional] Remove the optional text
 *
 */
@Component({
  template: `
    <div class="usa-form-group" [class.usa-form-group--error]="showError">
      <div class="grid-row">
        <label
          class="usa-label"
          *ngIf="hasLabel()"
          [attr.for]="id"
          [ngClass]="{
            'margin-bottom-1':
              this.field?.templateOptions?.label &&
              !this.field?.templateOptions?.hideLabel &&
              this.field?.parent?.fieldGroup?.length === 1,
            'usa-sr-only':
              to.hideLabel ||
              ((to.group === 'panel' || to.group === 'accordion') && field?.parent?.type !== 'formly-group')
          }"
        >
          <span *ngIf="to.tagText" class="usa-tag" [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'">{{
            to.tagText
          }}</span>

          <ng-container *ngIf="to.labelTemplate" [ngTemplateOutlet]="to.labelTemplate"> </ng-container>
          <ng-container *ngIf="!to.labelTemplate">
            <span [attr.class]="to.labelClass">{{ to.label }}</span>
          </ng-container>

          <span class="text-normal" *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
        </label>

        <span *ngIf="to.tooltipText && field.type !== 'checkbox'" class="margin-left-1">
          <p #tipContent [ngClass]="to.tooltipClass" class="margin-1" [innerHTML]="to.tooltipText"></p>
          <usa-icon
            [position]="to.tooltipPosition ? to.tooltipPosition : 'right'"
            [sdsTooltip]="tipContent"
            [size]="'lg'"
            [icon]="'info-circle'"
          ></usa-icon>
        </span>
      </div>
      <div
        [ngClass]="{
'{{to.labelContentClass}}': to.labelContentClass,
         'single-form-control':
              ((to.group === 'panel' || to.group === 'accordion') && field?.parent?.type !== 'formly-group')
          }"
      >
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class FormlyLabelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
  hasLabel() {
    if (this.to.hideLabel) {
      return false;
    }

    if (this.to.label) {
      if (!(this.field.type === 'checkbox' || this.field.type === 'multicheckbox')) {
        return true;
      }
    }
  }
}
