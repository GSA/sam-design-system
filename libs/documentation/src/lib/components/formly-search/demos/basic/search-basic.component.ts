import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-search-basic-demo`,
  templateUrl: './search-basic.component.html',
})
export class SearchBasic {
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
            searchSettings: {
              id: 'ddsearch',
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
            searchSettings: {
              id: 'invSearch',
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
}
