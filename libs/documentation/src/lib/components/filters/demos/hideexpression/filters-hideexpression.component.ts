import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './filters-hideexpression.component.html',
  selector: `sds-filters-hideexpression-demo`,
})
export class FiltersHideExpression {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'purchaser',
      templateOptions: {
        label: 'Purchaser',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'agencyPicker',
          type: 'select',
          templateOptions: {
            label: 'Federal Organizations',
            hideOptional: true,
            selectionType: 'checkbox',
            countFieldLevel: 2,
            inactiveToggle: false,
            model: {},
            simpleResponse: true,
          },
        },
        {
          key: 'idvWebsite',
          hide: true,
          type: 'input',
          templateOptions: {
            label: 'IDV Website',
            hideOptional: true,
          },
        },
        {
          key: 'whoCanUse',
          hide: true,
          type: 'select',
          templateOptions: {
            label: 'Who Can Use',
            hideOptional: true,
            options: [
              {
                label: 'Only My Agency -  Only the Agency awarding the contract may place orders',
                value: 'Only My Agency',
              },
              {
                label: 'All Agencies - All Federal Government agencies may place orders against the contract',
                value: 'All Agencies',
              },
              {
                label: 'Defense - Only Department of Defense agencies may place orders against the contract',
                value: 'Defense',
              },
              {
                label: 'Civilian - Only civilian agencies may place orders against the contract',
                value: 'Civilian',
              },
              {
                label: 'Codes - Only the agencies codes listed in a comma-separated list.',
                value: 'Codes',
              },
              {
                label: 'Other',
                value: 'Other',
              },
            ],
          },
        },
        {
          key: 'lastDateToOrder',
          hide: true,
          // "group":"panel",
          templateOptions: {
            label: 'Last Date to Order',
          },
          fieldGroup: [
            {
              key: 'lastDateToOrderSelect',
              type: 'select',
              templateOptions: {
                hideOptional: true,
                placeholder: 'Anytime',
                options: [
                  {
                    label: 'Next day',
                    value: 'next24',
                  },
                  {
                    label: 'Next 2 days',
                    value: 'next2days',
                  },
                  {
                    label: 'Next 3 days',
                    value: 'next3days',
                  },
                  {
                    label: 'Next week',
                    value: 'nextWeek',
                  },
                  {
                    label: 'Next month',
                    value: 'nextMonth',
                  },
                  {
                    label: 'Next 3 months',
                    value: 'next3Months',
                  },
                  {
                    label: 'Next year',
                    value: 'nextYear',
                  },
                  {
                    label: 'Custom date',
                    value: 'customDate',
                  },
                ],
                label: 'Last Date to Order',
              },
            },
            {
              key: 'lastDateToOrderFrom',
              type: 'datepicker',
              templateOptions: {
                hideOptional: true,
                label: 'From',
              },
              modelOptions: {
                updateOn: 'blur',
              },
            },
            {
              key: 'lastDateToOrderTo',
              type: 'datepicker',
              templateOptions: {
                hideOptional: true,
                label: 'To',
              },
              modelOptions: {
                updateOn: 'blur',
              },
            },
          ],
        },
        {
          key: 'feeForUseOfService',
          hide: true,
          type: 'select',
          templateOptions: {
            label: 'Fee for Use of Service',
            hideOptional: true,
            options: [
              {
                label: 'FIX - Fixed',
                value: 'FIX',
              },
              {
                label: 'RVA - Range Varies by Amount',
                value: 'RVA',
              },
              {
                label: 'RVO - Range Varies by Other Factor',
                value: 'RVO',
              },
              {
                label: 'NO - No Fee',
                value: 'NO',
              },
            ],
          },
        },
        {
          key: 'fips95CodesOtherText',
          hide: true,
          type: 'input',
          templateOptions: {
            label: 'FIPS 95 Codes / Other Text',
            hideOptional: true,
          },
        },
        {
          key: 'primaryPointOfContact',
          hide: true,
          type: 'input',
          templateOptions: {
            label: 'Primary Point of Contact',
            hideOptional: true,
          },
        },
        {
          key: 'individualOrderCallLimit',
          // "group":"panel",
          hide: false,
          templateOptions: {
            label: 'Individual Order / Call Limit',
          },
          fieldGroup: [
            {
              key: 'individualOrderCallLimitSelect',
              type: 'select',
              // "group":",
              templateOptions: {
                label: 'Individual Order / Call Limit',
                placeholder: 'Any amount',
                hideOptional: true,
                options: [
                  {
                    label: 'Under $1M',
                    value: 'under1',
                  },
                  {
                    label: '$1M - $25M',
                    value: '1to25',
                  },
                  {
                    label: '$25M - $100M',
                    value: '25to100',
                  },
                  {
                    label: '$100M - $500M',
                    value: '100to500',
                  },
                  {
                    label: '$500M and above',
                    value: '500above',
                  },
                  {
                    label: 'Specify Range',
                    value: 'range',
                  },
                ],
              },
            },
            {
              key: 'individualOrderCallLimitMin',
              type: 'input',
              modelOptions: {
                debounce: {
                  default: 2000,
                },
              },
              templateOptions: {
                label: 'Min',
                hideOptional: true,
              },
            },
            {
              key: 'individualOrderCallLimitMax',
              type: 'input',
              modelOptions: {
                debounce: {
                  default: 2000,
                },
              },
              templateOptions: {
                label: 'Max',
                required: false,
                hideOptional: true,
              },
            },
          ],
        },
      ],
    },
  ];
  // [
  //   {
  //     key: 'location.country',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'Select Country',
  //       description: 'Select country.',
  //       required: true,
  //       options: [
  //         { label: 'United States of America', value: 'USA' },
  //         { label: 'Canada', value: 'CA' },
  //         { label: 'India', value: 'IND' },
  //         { label: 'Mexico', value: 'MX' },
  //         { label: 'United Kingdom', value: 'UK' },
  //         { label: 'Australia', value: 'AUS' },
  //       ],
  //     },
  //     lifecycle: {
  //       onChanges: function (form, field) {
  //         field.formControl.valueChanges.subscribe((v) => {
  //           Object.keys(form['controls'].location['controls']).forEach((key) => {
  //             if (key !== 'country') {
  //               form['controls'].location['controls'][key].setValue('');
  //             }
  //           });
  //         });
  //       },
  //     },
  //   },
  //   {
  //     key: 'location.province',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'Select province',
  //       description: 'Select province.',
  //       required: true,
  //       options: [
  //         { label: 'Manitoba', value: 'MB' },
  //         { label: 'Newfoundland and Labrador', value: 'NL' },
  //         { label: 'Prince Edward Island', value: 'PE' },
  //         { label: 'Nova Scotia', value: 'NS' },
  //         { label: 'New Brunswick', value: 'NB' },
  //         { label: 'Quebec', value: 'QC' },
  //         { label: 'Ontario', value: 'ON' },
  //         { label: 'Saskatchewan', value: 'SK' },
  //         { label: 'Alberta', value: 'AB' },
  //         { label: 'Yukon', value: 'YT' },
  //         { label: 'Nunavut', value: 'NU' },
  //       ],
  //     },
  //     hideExpression: () => {
  //       if (this.model && this.model.location && this.model.location.country) {
  //         return this.model.location.country !== 'CA';
  //       }
  //       return true;
  //     },
  //   },
  //   {
  //     key: 'location.state',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'State',
  //       description: 'State',
  //       placeholder: 'Illinois',
  //     },
  //     hideExpression: () => {
  //       if (this.model && this.model.location && this.model.location.country) {
  //         return this.model.location.country === 'CA';
  //       }
  //       return true;
  //     },
  //   },
  //   {
  //     key: 'location.city',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'City',
  //       description: 'City',
  //       placeholder: 'Chicago',
  //     },
  //     hideExpression: () => {
  //       return !(
  //         this.model &&
  //         this.model.location &&
  //         this.model.location.country &&
  //         (this.model.location.state || (this.model.location.province && this.model.location.country === 'CA'))
  //       );
  //     },
  //   },
  //   {
  //     key: 'location.street',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Street',
  //       hideOptional: true,
  //       description: 'Street',
  //     },
  //     hideExpression: () => {
  //       return !(
  //         this.model &&
  //         this.model.location &&
  //         this.model.location.country &&
  //         (this.model.location.state || (this.model.location.province && this.model.location.country === 'CA')) &&
  //         this.model.location.city
  //       );
  //     },
  //   },
  // ];
  updateModel() {
    this.model = {
      location: {
        state: '',
        province: '',
        street: '',
        city: '',
        country: this.model && this.model.location && this.model.location.country ? this.model.location.country : '',
      },
    };
  }
}
