import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';

/**
 * @param string [to.group] used to set the wrapper tupe
 * @param string [to.announceLabel] For screenreader
 * @param string [to.label] Text to be shown for the label
 * @param string [to.hideLabel] Hide the label
 *
 */
@Component({
  template: `
    <ng-container *ngIf="!to.readonlyMode; else defaultTemplate">
      <ng-container [ngSwitch]="to.group">
        <ng-container *ngSwitchCase="'accordion'">
          <usa-accordion #groupAccordion [singleSelect]="!multi" class="sds-accordion--filters">
            <usa-accordion-item [expanded]="modelHasValue()">
              <ng-template UsaAccordionHeader>
                <span [attr.class]="to.labelClass">{{ to.label }}</span>
              </ng-template>
              <ng-template UsaAccordionContent>
                <ng-container #fieldComponent></ng-container>
              </ng-template>
            </usa-accordion-item>
          </usa-accordion>
        </ng-container>
        <ng-container *ngSwitchCase="'panel'">
          <div
            class="sds-panel"
            [ngClass]="{ 'sds-panel--multiple': field?.fieldGroup?.length }"
          >
            <div
              class="sds-panel__header"
              *ngIf="!to.hideLabel"
              [attr.aria-hidden]="!to.announceLabel ? undefined : 'true'"
            >
              <span [attr.class]="to.labelClass">{{ to.label }}</span>
            </div>
            <div class="sds-panel__body">
              <ng-container #fieldComponent></ng-container>
            </div>
          </div>
        </ng-container>
        <ng-container *ngSwitchCase="'popover'">
        <div #popoverContent class="padding-1 text-left sds-width-max-content">
          <ng-container #fieldComponent></ng-container>
        </div>
          <div
            [sdsPopover]="popoverContent"
              [position]="'bottom'"
              [closeOnContentClick]="false"
              [closeOnClickOutside]="true"
              tabindex="0" [attr.aria-label]="to.label">
            {{to.label}}
            <usa-icon [icon]="'chevron-down'" [size]="'sm'"></usa-icon>
          </div>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <ng-container #fieldComponent></ng-container>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultTemplate>
      <ng-container #fieldComponent></ng-container>
    </ng-template>
  `,
})
export class FormlyGroupWrapperComponent extends FieldWrapper {
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
