import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'sam-formly-input',
  templateUrl: './formly-input.component.html',
  styleUrls: ['./formly-input.component.scss']
})
export class FormlyInputComponent {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
 
    {
      key: 'filters',
      wrappers: ['panel'],
      templateOptions: { label: 'Entity Name/UEI' },
      fieldGroup:[{
         key: 'firstName',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'First Name',
          },
        
      }]
    },

    {
      key: 'testings',
      wrappers: ['panel'],
      templateOptions: { label: 'Service Classifications' },
      fieldGroup: [ 
        {
        key: 'text',
        type: 'input',
        templateOptions: {
          label: 'Formly input type text',
          placeholder: 'placeholder',
          inputType: 'text',
  
          required: true,
          inputStyle: 'success'
        },
      },
      {
        key: 'number',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Formly input type number',
          placeholder: 'placeholder',
          min: 13,
          max: 40,
          inputType: 'number',
          inputStyle: 'error',
          errorMessage: 'Helpful error message'
        },
      },
      {
        key: 'drop-down',
        type: 'select',
        templateOptions: {
          label: 'Formly select type',
          placeholder: 'Select',
          multiple: false,  // can be true or false to select multiple options or single
          options: [
            { label: 'Shilpa', value: 'ys', group: 'Female' },
            { label: 'Christy', value: 'ch', group: 'Female' },
            { label: 'Carlos', value: 'cv', group: 'Male' },
            { label: 'Rinu', value: 'rn', group: 'Male' },
            { label: 'Thomas', value: 'tt', group: 'Male' },
            { label: 'Sam', value: 'sam', group: 'Female' },
            { label: 'David', value: 'dr', group: 'Male' },
          ],
        },
      },
      {
        key: 'text',
        type: 'textarea',
        templateOptions: {
          label: 'Formly input type textarea',
          placeholder: 'placeholder',
        },
      },
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          label: 'Formly Radio button type',
          options: [
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' },
            { label: 'Option C', value: 'd' },
          ],
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Formly Checkbox',
          option: { label: 'Option A', value: 'a' },
        },
      },
      {
        key: 'multi-checkbox',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Formly multi Select checkbox',
          options: [
            {
              key: 'sports',
              value: 'Sports'
            },
            {
              key: 'movies',
              value: 'Movies'
            },
            {
              key: 'others',
              value: 'Others'
            }
          ]
        },
      }
        ],
    },
  ];

  submit(model) {
    this.results = model;
  }


}
