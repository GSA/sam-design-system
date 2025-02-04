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
      props: {
        label: 'Status',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'all',
            label: 'All',
          },
        ],
      },
    },
    {
      key: 'socioeconomic2',
      type: 'multicheckbox',
      props: {
        label: 'Socio-Economic Status',
        options: [
          {
            value: 'vet',
            label: 'Veteran Owned',
          },
          {
            value: 'women',
            label: 'Women Owned',
          },
          {
            value: 'minority',
            label: 'Minority Owned',
          },
        ],
      },
    },
    {
      key: 'dateRange',
      props: {
        label: 'Date Range',
        autoClose: 'false',
      },
      fieldGroup: [
        {
          key: 'dateRangeSelect',
          type: 'select',
          className: 'display-block',
          props: {
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
          props: {
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
          props: {
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
      props: {
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
      props: {
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
