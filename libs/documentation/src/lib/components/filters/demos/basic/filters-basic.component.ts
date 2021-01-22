import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-basic.component.html',
  selector: `sds-filters-basic-demo`,
})
export class FiltersBasic implements OnInit {
  constructor() {

  }

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  // Input
  sdsInput: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  // Select
  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'entity.type',
      type: 'select',
      templateOptions: {
        label: 'Entity Type',
        description: 'Select the entity type.',
        required: true,
        options: [
          { label: 'Contract Opportunities', value: 'co' },
          { label: 'Entity Information', value: 'ei' },
          { label: 'Assistance Listings', value: 'al' },
          { label: 'Contract Data', value: 'cd' },
          { label: 'Federal Hierarchy', value: 'fh' },
          { label: 'Wage Determination', value: 'wd' }
        ]
      }
    }
  ];

  // Checkbox
  sdsCheckbox: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      templateOptions: {
        label: 'I agree.',
        description:
          'By checking the box below you agree to the terms and conditions of the site.',
        required: true
      }
    }
  ];

  // Multi Checkbox
  sdsMultiCheckbox: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Socio-Economic Status',
        description:
          'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned'
          },
          {
            key: 'women',
            value: 'Women Owned'
          },
          {
            key: 'minority',
            value: 'Minority Owned'
          }
        ]
      }
    }
  ];

  // Radio
  sdsRadio: FormlyFieldConfig[] = [
    {
      key: 'entity.taxFilingStatus',
      type: 'radio',
      templateOptions: {
        label: 'Tax Filing Structure',
        description:
          'Select how your business or organization is defined by the IRS.',
        required: true,
        options: [
          {
            key: 'ccorp',
            value:
              'Corporate Entity, Not Tax Exempt (Firm pays U.S. Federal Income Taxes or U.S. Possession Income Taxes)'
          },
          {
            key: 'nonprofit',
            value:
              'Corporate Entity, Tax Exempt (Firm does not pay U.S. Federal Income Taxes nor U.S. Possession Income Taxes)'
          },
          {
            key: 'partnerllc',
            value: 'Partnership or Limited Liability Partnership'
          },
          {
            key: 'soleproprietorship',
            value: 'Sole Proprietorship'
          },
          {
            key: 'international',
            value: 'International Organization'
          },
          {
            key: 'other',
            value: 'Other'
          }
        ]
      }
    }
  ];

  // DatePicker
  sdsDatePicker: FormlyFieldConfig[] = [
    {
      key: 'entity.date',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (no validation)',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    }
  ];

  // DateRangePicker
  sdsDateRangePicker: FormlyFieldConfig[] = [
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      templateOptions: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    }
  ];

  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
