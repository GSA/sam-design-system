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
          'usa-sr-only':
            to.hideLabel ||
            ((to.group === 'panel' || to.group === 'accordion') &&
              field?.parent?.type !== 'formly-group')
        }"
      >
        <span
          *ngIf="to.tagText"
          class="usa-tag"
          [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
          >{{ to.tagText }}</span
        >
        <span [attr.class]="to.labelClass">{{ to.label }}</span>
        <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
      </label>
      <span *ngIf="to.tooltipText" class="padding-top-3 margin-left-1"
        [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle"
        [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0"
        aria-label="info tooltip">
        <usa-icon [size]="'sm'" [class]="to.tooltipIconClass" [icon]="to.toolTipIcon ? to.toolTipIcon :'info-circle'"></usa-icon>
      </span>
      </div>
      <ng-container #fieldComponent></ng-container>
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
      if (
        !(this.field.type === 'checkbox' || this.field.type === 'multicheckbox')
      ) {
        return true;
      }
    }
  }
}
