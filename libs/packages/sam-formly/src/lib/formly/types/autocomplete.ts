import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SDSAutocompleteComponent } from '@gsa-sam/components'

@Component({
  selector: 'sds-formly-field-autocomplete',
  template: `
   <div class="grid-row">
  <sds-autocomplete [formControl]="formControl"></sds-autocomplete>
  <span *ngIf="to.tooltipText" class="sds-stack padding-top-105 margin-left-1"
        [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle"
        [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0"
        aria-label="info tooltip">
        <usa-icon [size]="'lg'" [icon]="'info-circle-fill'"></usa-icon>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldAutoCompleteComponent extends AbstractSdsFormly {
  @ViewChild(SDSAutocompleteComponent, { static: true }) public template: SDSAutocompleteComponent;
  defaultOptions = {
    templateOptions: {
      essentialModelFields: true
    },
  };
  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
}
