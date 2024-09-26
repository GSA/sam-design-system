import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param string [props.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param string [props.tagText] Text to be shown inside the tag
 * @param string [props.label] Text to be shown for the label
 * @param string [props.required] Makes the field required
 * @param string [props.hideOptional] Remove the optional text
 *
 */
@Component({
  template: `
    <div class="usa-form-group" [class.usa-form-group--error]="showError">
      <label
        class="usa-label"
        *ngIf="hasLabel()"
        [attr.for]="id"
        [ngClass]="{
          'margin-bottom-1':
            this.field?.props?.label && !this.field?.props?.hideLabel && this.field?.parent?.fieldGroup?.length === 1,
          'usa-sr-only':
            props.hideLabel ||
            ((props.group === 'panel' || props.group === 'accordion') && field?.parent?.type !== 'formly-group')
        }"
      >
        <span
          *ngIf="props.tagText"
          class="usa-tag"
          [ngClass]="props.tagClass ? props.tagClass : 'sds-tag--info-white'"
          >{{ props.tagText }}</span
        >

        <ng-container *ngIf="props.labelTemplate" [ngTemplateOutlet]="props.labelTemplate"> </ng-container>
        <ng-container *ngIf="!props.labelTemplate">
          <span [attr.class]="props.labelClass"
            >{{ props.label
            }}<span class="text-normal" *ngIf="!props.required && !props.hideOptional"> (Optional)</span>
            <span *ngIf="props.tooltipText && field.type !== 'checkbox'" class="margin-left-1">
              <ng-template #tipContent>
                <p [ngClass]="props.tooltipClass" class="margin-1" [innerHTML]="props.tooltipText"></p>
              </ng-template>
              <usa-icon
                class="text-secondary"
                [position]="props.tooltipPosition ? props.tooltipPosition : 'right'"
                [sdsTooltip]="tipContent"
                [size]="'lg'"
                [icon]="'info-circle'"
              ></usa-icon>
            </span>
          </span>
        </ng-container>
      </label>

      <div
        [ngClass]="{
'{{props.labelContentClass}}': props.labelContentClass,
         'single-form-control':
              ((props.group === 'panel' || props.group === 'accordion') && field?.parent?.type !== 'formly-group')
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
    if (this.props.hideLabel) {
      return false;
    }

    if (this.props.label) {
      if (!(this.field.type === 'checkbox' || this.field.type === 'multicheckbox')) {
        return true;
      }
    }
  }
}
