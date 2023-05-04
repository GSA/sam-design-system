import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-horizontal',
  templateUrl: './formly-filter-horizontal.component.html',
})
export class FormlyFilterHorizontalComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'status',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Status',
        group: 'popover',
        options: [
          {
            key: 'active',
            value: 'Active',
          },
          {
            key: 'inactive',
            value: 'Inactive',
          },
          {
            key: 'all',
            value: 'All',
          },
        ],
      },
    },
    {
      key: 'socioeconomic2',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Socio-Economic Status',
        group: 'popover',
        options: [
          {
            key: 'vet',
            value: 'Veteran Owned',
          },
          {
            key: 'women',
            value: 'Women Owned',
          },
          {
            key: 'minority',
            value: 'Minority Owned',
          },
        ],
      },
    },
    {
      key: 'dateRange',
      templateOptions: {
        label: 'Date Range',
        group: 'popover',
        closeOnClickOutside: false,
      },
      fieldGroup: [
        {
          key: 'dateRangeSelect',
          type: 'select',
          className: 'display-block',
          templateOptions: {
            label: 'Select Date',
            options: [
              { label: 'Anytime', value: 'anytime' },
              { label: 'Past day', value: 'pastDay' },
              { label: 'Past Week', value: 'pastWeek' },
              { label: 'Custom Dates', value: 'customDate' },
            ],
            hideOptional: true,
          },
        },
        {
          key: 'createdDate',
          type: 'datepicker',
          className: 'display-block',
          templateOptions: {
            label: 'Created Date',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2020, 11, 15),
            placeholder:
              'eg: ' +
              new Date().toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }),
            hideOptional: true,
          },
          hideExpression: (model) => {
            return !model || !model['dateRangeSelect'] || model['dateRangeSelect'] != 'customDate';
          },
        },
        {
          key: 'expirationDate',
          type: 'datepicker',
          className: 'display-block',
          templateOptions: {
            label: 'Expires Date',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2020, 11, 15),
            placeholder:
              'eg: ' +
              new Date().toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }),
            hideOptional: true,
          },
          hideExpression: (model) => {
            return !model || !model['dateRangeSelect'] || model['dateRangeSelect'] != 'customDate';
          },
        },
      ],
    },
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepickerv2',
      hide: true,
      templateOptions: {
        group: 'popover',
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15),
        placeholder:
          'eg: ' +
          new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        hideOptional: true,
      },
    },
    {
      key: 'entity',
      type: 'input',
      hide: true,
      templateOptions: {
        group: 'popover',
        label: 'Entity Name',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
  ];
 searchModel = {};

  handleSubmit($event) {
    console.log($event);
  }

  onSearchModelChange($event) {
    console.log($event);
  }

  onFilterChange($event) {
    console.log($event);
  }
}
