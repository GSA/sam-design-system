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
  <sds-autocomplete [formControl]="formControl"></sds-autocomplete>
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
