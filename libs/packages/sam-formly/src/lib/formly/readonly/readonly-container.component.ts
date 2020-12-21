import { Component, Input, OnInit } from "@angular/core";
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFormlyTypes } from "../models/formly-types";
import { ReadonlyOptions } from './readonly-options.model';

/**
 * Wrapper level component for displaying readonly format for each formly types
 */
@Component({
  selector: `sds-readonly-container`,
  templateUrl: './readonly-container.component.html',
})
export class ReadonlyContainerComponent implements OnInit {

  /**
   * Formlyfieldconfig that is used to generate the formlyform. If this value
   * is provided, the necessary information will be extracted from the given
   * field configuration, and all other inputs will be ignored.
   */
  @Input() formlyFieldConfig: FormlyFieldConfig;

  /**
   * Type of formly to display value for - will be ignored if formlyFieldConfig is defined
   */
  @Input() formlyType: string;

  /**
   * Label for the given value - will be ignored if formlyFieldConfig input is defined
   * */
  @Input() label: string;

  /**
   * Value of corresponding label - will be ignored if formlyFieldConfig is defined
   */
  @Input() value: any;

  /**
   * Additional information useful for displaying the value - will be ignored if formlyFieldConfig is defined
   */
  @Input() additionalConfig: ReadonlyOptions = {};


  sdsFormlyTypes = SdsFormlyTypes;

  ngOnInit() {
    if (this.formlyFieldConfig) {
      this.label = this.formlyFieldConfig.templateOptions.label;
      this.value = this.formlyFieldConfig.formControl.value;
      this.formlyType = this.formlyFieldConfig.type;
      this.assignAdditionalConfig();
    }
  }

  private assignAdditionalConfig() {
    const options = this.formlyFieldConfig.templateOptions.options as any;
    this.additionalConfig = {
      providedOptions: options,
    };

    if (this.formlyFieldConfig.type === this.sdsFormlyTypes.AUTOCOMPLETE) {
      this.additionalConfig.autocompleteOptions = this.formlyFieldConfig.templateOptions.configuration;
    }

    // We do array access from field config for daterangepicker, which can be undefined for other types, 
    // hence this is sectioned off in a conditional
    if (this.formlyFieldConfig.type === this.sdsFormlyTypes.DATERANGEPICKER) {
      this.additionalConfig.daterangepickerOptions = {
        fromDateKey: this.formlyFieldConfig.fieldGroup[0].key as any,
        toDateKey: this.formlyFieldConfig.fieldGroup[1].key as any,
      }
    }
  }
} 
