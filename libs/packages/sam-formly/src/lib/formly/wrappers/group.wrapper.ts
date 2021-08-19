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
          <sds-accordion-next
            [(multi)]="multi"
            expandedHeight="34px"
            collapsedHeight="34px"
            #sdsAccordionDemo
            class="sds-accordion--filters"
          >
            <sds-accordion-item
              class="sds-accordion__panel"
              [expanded]="modelHasValue()"
            >
              <sds-accordion-title>{{ to.label }}</sds-accordion-title>
              <sds-accordion-content>
                <ng-container #fieldComponent></ng-container>
              </sds-accordion-content>
            </sds-accordion-item>
          </sds-accordion-next>
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
              {{ to.label }}
            </div>
            <div class="sds-panel__body">
              <ng-container #fieldComponent></ng-container>
            </div>
          </div>
        </ng-container>
        <ng-container *ngSwitchCase="'popover'">
        <div #popoverContent class="padding-1 text-left">
          <ng-container #fieldComponent></ng-container>
        </div>
          <div
            [sdsPopover]="popoverContent"
              [position]="'bottom'"
              [closeOnContentClick]="false"
              [closeOnClickOutside]="true"
              tabindex="0" [attr.aria-label]="to.label">
            {{to.label}}
            <usa-icon [icon]="'chevron-down'"></usa-icon>
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
      return hasValue || this.formControl.dirty ? true : false;
    }
  }
}
