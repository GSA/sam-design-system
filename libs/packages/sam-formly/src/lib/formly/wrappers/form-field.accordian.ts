import { AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';
import { Subscription } from 'rxjs';
import { UsaAccordionComponent, UsaAccordionItem } from '@gsa-sam/ngx-uswds';
import { filter } from 'rxjs/operators';

/**
 * @param string [props.expand] to expand the accordion
 *
 */

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
    <usa-accordion #groupAccordion [singleSelect]="!multi" class="sds-accordion--filters">
      <usa-accordion-item [expanded]="modelHasValue()" ]>
        <ng-template UsaAccordionHeader>
          <span [attr.class]="props.labelClass">{{ props.label }}</span>
        </ng-template>
        <ng-template UsaAccordionContent>
          <ng-container #fieldComponent></ng-container>
        </ng-template>
      </usa-accordion-item>
    </usa-accordion>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper implements AfterViewInit, OnDestroy {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

  @ViewChild('groupAccordion') accordion: UsaAccordionComponent;
  @ViewChild(UsaAccordionItem) accordionItem: UsaAccordionItem;

  multi = true;

  resetAllSubscription: Subscription;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.props.group != 'accordion' || !this.accordion) {
      return;
    }

    this.resetAllSubscription = this.field.options.fieldChanges
      .pipe(filter(({ type }) => type === 'resetAll' && this.accordionItem.expanded))
      .subscribe(() => {
        if (!this.modelHasValue()) {
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
