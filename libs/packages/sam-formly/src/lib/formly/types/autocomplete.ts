import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SDSAutocompleteComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-field-autocomplete',
  template: ` <sds-autocomplete [formControl]="formControl"></sds-autocomplete> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FormlyFieldAutoCompleteComponent extends AbstractSdsFormly implements OnInit, AfterViewInit {
  @ViewChild(SDSAutocompleteComponent, { static: true }) public template: SDSAutocompleteComponent;
  defaultOptions = {
    props: {
      essentialModelFields: true,
    },
  };
  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
  override ngOnInit(): void {
    super.ngOnInit();
    if (this.props?.change && this.formControl) {
      this.formControl.valueChanges.subscribe(() => {
        this.props.change(this.field);
      });
    }
  }
  ngAfterViewInit(): void {
    if (this.template.configuration.id !== undefined && this.template.configuration.id !== this.id) {
      console.warn(
        `Formly Autocomplete ID mismatch: Formly Autocomplete ID(${this.id}) does not match Autocomplete Configuration ID (${this.template.configuration.id})`,
      );
    }
    if (!this.template.configuration.id) {
      this.template.configuration.id = this.id;
    }
  }
}
