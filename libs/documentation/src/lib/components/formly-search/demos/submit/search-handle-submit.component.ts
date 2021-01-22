import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-search-submit-demo`,
  templateUrl: './search-handle-submit.component.html',
})

export class SearchHandleSubmit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'filter',
      templateOptions: {
        label: 'Keyword (with label)',
        ariaHidden: true
      },
      fieldGroup: [
        {
          key: 'searchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search',
            submitHandler: this.handleSubmit
          }
        },

        {
          key: 'ddsearchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search with dropdown',
            submitHandler: this.handleSubmit,
            searchSettings: {
              dropdown: {
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' }
                ]
              }
            }
          }
        },

        {
          key: 'invsearchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search with dropdown inverse',
            submitHandler: this.handleSubmit,
            searchSettings: {
              dropdown: {
                inverse: true,
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' }
                ]
              }
            }
          }
        }
      ]
    }
  ];

  handleOnModelChange(value){
    console.log(value)
  }
  handleSubmit(value){
    console.log('submitted', value)
  }
}
