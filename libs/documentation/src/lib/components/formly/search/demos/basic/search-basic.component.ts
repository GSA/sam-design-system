import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './search-basic.component.html',
})
export class SearchBasic {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'filter',
      templateOptions: {
        label: 'Keyword (with label)',
        ariaHidden: true,
      },
      fieldGroup: [
        {
          key: 'searchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search',
          },
        },

        {
          key: 'ddsearchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search with dropdown',
            searchSettings: {
              dropdown: {
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
            },
          },
        },

        {
          key: 'invsearchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search with dropdown inverse',
            searchSettings: {
              dropdown: {
                inverse: true,
                options: [
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
