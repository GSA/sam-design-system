import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-search-submit-demo`,
  templateUrl: './search-handle-submit.component.html',
})
export class SearchHandleSubmit {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'filter',
      props: {
        label: 'Keyword (with label)',
        ariaHidden: true,
      },
      fieldGroup: [
        {
          key: 'searchmodel',
          type: 'search',
          props: {
            label: 'Search',
            submitHandler: this.handleSubmit,
            searchSettings: {
              placeholder: 'eg: Acme Corporation',
            },
          },
        },

        {
          key: 'ddsearchmodel',
          type: 'search',
          props: {
            label: 'Search with dropdown',
            submitHandler: this.handleSubmit,
            searchSettings: {
              id: 'ddSearchSubmit',
              dropdown: {
                options: [
                  { value: '-', label: '--Select--' },
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
              placeholder: 'eg: Acme Corporation',
            },
          },
        },

        {
          key: 'invsearchmodel',
          type: 'search',
          props: {
            label: 'Search with dropdown inverse',
            submitHandler: this.handleSubmit,
            searchSettings: {
              id: 'invSearchSubmit',
              dropdown: {
                inverse: true,
                options: [
                  { value: '-', label: '--Select--' },
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
              placeholder: 'eg: Acme Corporation',
            },
          },
        },
      ],
    },
  ];

  handleOnModelChange(value) {
    console.log(value);
  }
  handleSubmit(value) {
    console.log('submitted', value);
  }
}
