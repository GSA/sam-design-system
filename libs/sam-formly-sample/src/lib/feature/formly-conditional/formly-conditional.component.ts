import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-conditional',
  templateUrl: './formly-conditional.component.html',
})
export class FormlyConditionalComponent{

form = new FormGroup({});
model: any = {};
options: FormlyFormOptions = {};

fields: FormlyFieldConfig[] = [
  
  {
     // key: 'conditionalFilters',
    
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Conditional Filters' },
      fieldGroup: [
        {
            key: 'firstInput',
            type: 'input',
            templateOptions: {
              label: 'First Input',
              options: [
                {
                  label: 'First Input',
                  placeholder: 'Type here to reveal the second input',
                }
              ]
            },
          },
          {
            key: 'secondInput',
            type: 'input',
            hideExpression: (model) => !this.model.firstInput,
            templateOptions: {
              label: 'Second Input',
              options: [
                {
                  label: 'Second Input',
                }
              ]
            },      
          },
        ]
    },
    {
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Conditional Radiobuttons' },
      fieldGroup: [
        {
          key: 'check',
          type: 'select',
          defaultValue: 'select',
          templateOptions: {
            label: 'Dropdown Radio',
            options: [
              {label:'None', value:'select'},
              {label:'Red', value:'red'},
              {label:'Green', value:'green'},
            ]
          },
        },
        {
          key: 'red',
          type: 'radio',
          hideExpression: (model) => this.model.check !== 'red',
          templateOptions: {
            options: [
              {label: 'Red', value: 'radio'},
            ]
          }
        },
        {
          key: 'green',
          type: 'radio',
          hideExpression: (model) => this.model.check !== 'green',
          templateOptions: {
            options: [
              {label: 'Green', value: 'radio'},
            ]
          }
        },
      ]
    },
    {
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Conditional Checkbox' },
      fieldGroup: [
        {
          key: 'checkbox',
          type: 'select',
          defaultValue: 'select',
          templateOptions: {
            label: 'Checkbox Dropdown',
            options: [
              {label: 'Select Here',  value: 'select'},
              {label: 'select checkbox to agree', value:'agree'},
              {label: 'select checkbox to disagree', value:'disagree'},
            ]
          }
        },
        {
          key: 'agree',
          type: 'multicheckbox',
          hideExpression: (model) => this.model.checkbox !== 'agree',
          templateOptions: {
            options: [
              {
                label: 'I agree', value: 'agree'
              }
            ]
          },
        },
        {
          key: 'disagree',
          type: 'multicheckbox',
          hideExpression: (model) => this.model.checkbox !== 'disagree',
          templateOptions: {
            options: [
              {
                label: 'I disagree', value: 'disagree',
              },
            ]
          },
        },                
      ]
    },
    {
      template: "<h3 class='margin-top-5 margin-bottom-1'>Example</h3><p class='margin-top-0'>some text</p>"
    },
    {
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Hide input when checkbox checked' },
      fieldGroup: [
        {
          key: 'inputField',
          type: 'input',
          hideExpression: (model) => this.model.firstField,
          templateOptions: {
                placeholder: 'selection of checkbox below will hide this input field.'
              }
        },
        {
          key: 'firstField',
          type: 'multicheckbox',
          templateOptions:{
            options: [
              {
                label: 'Hide Above Input Field'
              },
            ]
          },
        },
      ]
    },
    ];

}
