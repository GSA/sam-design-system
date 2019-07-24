import {  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
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

 @ViewChild(SDSAutocompleteComponent) public template: SDSAutocompleteComponent;

  constructor (_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
 }
