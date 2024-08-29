import { AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';
import { Subscription } from 'rxjs';
import { UsaAccordionComponent, UsaAccordionItem } from '@gsa-sam/ngx-uswds';
import { filter } from 'rxjs/operators';

/**
 * @param string [props.group] used to set the wrapper tupe
 * @param string [props.announceLabel] For screenreader
 * @param string [props.label] Text to be shown for the label
 * @param string [props.hideLabel] Hide the label
 *
 */
@Component({
  template: `
    <ng-container *ngIf="!props.readonlyMode; else defaultTemplate">
      <ng-container [ngSwitch]="props.group">
        <ng-container *ngSwitchCase="'accordion'">
          <usa-accordion #groupAccordion [singleSelect]="!multi" class="sds-accordion--filters">
            <usa-accordion-item [expanded]="modelHasValue()">
              <ng-template UsaAccordionHeader>
                <span [attr.class]="props.labelClass">{{ props.label }}</span>
              </ng-template>
              <ng-template UsaAccordionContent>
                <ng-container #fieldComponent></ng-container>
              </ng-template>
            </usa-accordion-item>
          </usa-accordion>
        </ng-container>
        <ng-container *ngSwitchCase="'panel'">
          <div class="sds-panel" [ngClass]="{ 'sds-panel--multiple': field?.fieldGroup?.length }">
            <div
              class="sds-panel__header padding-top-1"
              *ngIf="!props.hideLabel"
              [attr.aria-hidden]="!props.announceLabel ? undefined : 'true'"
            >
              <span [attr.class]="props.labelClass">{{ props.label }}</span>
            </div>
            <div class="sds-panel__body">
              <ng-container #fieldComponent></ng-container>
            </div>
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
export class FormlyGroupWrapperComponent extends FieldWrapper implements AfterViewInit, OnDestroy {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

  @ViewChild('groupAccordion') accordion: UsaAccordionComponent;
  @ViewChild(UsaAccordionItem) accordionItem: UsaAccordionItem;

  multi = true;

  resetAllSubscription: Subscription;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.props.group === 'accordion' || this.props.group === 'panel' || this.field.fieldGroup) {
      this.field.className = this.field.className ? this.field.className : 'margin-top-0';
    }

    if (this.props.group != 'accordion' || !this.accordion) {
      return;
    }
    this.resetAllSubscription = this.field.options?.fieldChanges?.subscribe(({ type }) => {
      if (type === 'resetAll' && this.accordionItem.expanded && !this.modelHasValue()) {
        this.accordion.collapse(this.accordionItem.id);
      }
    });
  }

  ngOnDestroy() {
    if (this.resetAllSubscription) {
      this.resetAllSubscription.unsubscribe();
    }
  }

  modelHasValue() {
    if (this.props.hasOwnProperty('expand')) {
      return this.props.expand;
    } else {
      const hasValue =
        this.formControl.value instanceof Object
          ? qs.stringify(this.formControl.value, { skipNulls: true })
          : this.formControl.value;
      return hasValue || this.formControl.dirty ? true : false;
    }
  }
}
