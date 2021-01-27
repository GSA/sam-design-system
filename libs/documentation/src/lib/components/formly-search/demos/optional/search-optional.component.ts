import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-search-optional-demo`,
  templateUrl: './search-optional.component.html',
})
export class SearchOptional {
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
            id: 'searchOptional',
            label: 'Big Search',
            searchSettings: {
              id: 'search',
              size: 'large',
            },
          },
        },

        {
          key: 'ddsearchmodel',
          type: 'search',
          templateOptions: {
            label: 'Big Search with dropdown',
            searchSettings: {
              id: 'ddSearchOptional',
              size: 'large',
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
            label: 'Big Search with dropdown inverse',
            searchSettings: {
              placeholder: 'type here to search',
              size: 'large',
              id: 'invSearchOptional',
              dropdown: {
                placeholder: ' Select category',
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
