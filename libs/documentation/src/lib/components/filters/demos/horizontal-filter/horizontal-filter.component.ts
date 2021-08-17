import { Component } from "@angular/core";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";


@Component({
  selector: `horizontal-filter-demo`,
  templateUrl: `horizontal-filter.component.html`
})
export class HorizontalFilterDemo {
  options: FormlyFormOptions = {};
  model = {};
   // Default Multiple Controls
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
            value: 'Active'
          },
          {
            key: 'inactive',
            value: 'Inactive'
          },
          {
            key: 'all',
            value: 'All'
          }
        ]
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
      },
    },
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      hide: true,
      templateOptions: {
        group: 'popover',
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15),
        placeholder: 'eg: ' + new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
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
    {
      key: 'searchmodel',
      type: 'search',
      templateOptions: {
        label: 'Search',
        hideLabel: true,
        submitHandler: this.handleSubmit,
        searchSettings: {
          placeholder: 'eg: Acme Corporation',
        },
      },
    },
  ];

  handleSubmit($event) {
    console.log($event);
  }
}