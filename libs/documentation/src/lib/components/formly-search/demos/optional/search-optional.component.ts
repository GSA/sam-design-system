import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-search-optional-demo`,
  templateUrl: './search-optional.component.html',
})
export class SearchOptional {
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
            id: 'searchOptional',
            label: 'Big Search',
            searchSettings: {
              id: 'search',
              size: 'large',
              placeholder: 'eg: Acme Corporation',
            },
          },
        },

        {
          key: 'ddsearchmodel',
          type: 'search',
          props: {
            label: 'Big Search with dropdown',
            searchSettings: {
              id: 'ddSearchOptional',
              size: 'large',
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
            label: 'Big Search with dropdown inverse',
            searchSettings: {
              placeholder: 'eg: Acme Corporation',
              size: 'large',
              id: 'invSearchOptional',
              dropdown: {
                placeholder: 'Select category',
                inverse: true,
                options: [
                  { value: '-', label: 'Select category' },
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
            },
          },
        },
      ],
    },
  ];
}
