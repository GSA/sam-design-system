import {  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef, 
  OnInit} from '@angular/core';
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
export class FormlyFieldAutoCompleteComponent extends AbstractSdsFormly implements OnInit {

 @ViewChild(SDSAutocompleteComponent) public template: SDSAutocompleteComponent;
  constructor (_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  } 
  ngOnInit() {
    this.to.isFormlyType = true;
  }
 }
