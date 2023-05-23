import { Component } from '@angular/core';
import {  SdsFormlyTypes } from '@gsa-sam/sam-formly';

@Component({
  selector: 'sds-formly-wrapper-read-only-container',
  templateUrl: './formly-wrapper-read-only-container.component.html',
})
export class FormlyWrapperReadOnlyContainerComponent {
  sampleData = [
    {
      formlyType: SdsFormlyTypes.INPUT,
      label: 'First Name',
      value: 'Jane',
    },
    {
      formlyType: SdsFormlyTypes.CHECKBOX,
      label: 'Checkbox Label',
      value: true,
    },
    {
      formlyType: SdsFormlyTypes.SELECT,
      label: 'Selected State',
      value: 'virginia',
      additionalConfig: {
        providedOptions: [
          { value: 'arizona', label: 'Arizona' },
          { value: 'michigan', label: 'Michigan' },
          { value: 'virginia', label: 'Virginia' },
          { value: 'florida', label: 'Florida' },
        ],
      },
    },
    {
      formlyType: SdsFormlyTypes.AUTOCOMPLETE,
      label: 'Autocomplete Label',
      value: [
        { id: 1, name: 'Jane', email: 'jane_doe@mail.com' },
        { id: 4, name: 'John', email: 'john_doe@mail.com' },
      ],
      additionalConfig: {
        autocompleteOptions: {
          primaryTextField: 'name',
        },
      },
    },
  ];
}