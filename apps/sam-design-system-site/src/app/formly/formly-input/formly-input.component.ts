import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'sam-formly-input',
  templateUrl: './formly-input.component.html',
  styleUrls: ['./formly-input.component.scss']
})
export class FormlyInputComponent implements OnInit {
 results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Formly input type text',
        placeholder: 'placeholder',
        inputType: 'text',
       
        required: true,
        inputStyle:'success'
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
        inputStyle:'error',
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
          {label: 'Shilpa', value: 'ys', group: 'Female'},
          {label: 'Christy', value: 'ch', group: 'Female'},
          {label: 'Carlos', value: 'cv', group: 'Male'},
          {label: 'Rinu', value: 'rn', group: 'Male'},
          {label: 'Thomas', value: 'tt', group: 'Male'},
          {label: 'Sam', value: 'sam', group: 'Female'},
          {label: 'David', value: 'dr', group: 'Male'},
        ],
      },
    },
    {
      key: 'single-select',
      type: 'select',
      templateOptions: {
        label: 'Formly select type without group',
        placeholder: 'Select without group',
        multiple: true,
        options: [
          {label: 'Option A', value: 'a'},
          {label: 'Option B', value: 'b'}, 
          {label: 'Option C', value: 'c'},
          {label: 'Option C', value: 'd'},
        ],
      },
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'Formly Radio button type',
        options: [
          {label: 'Option A', value: 'a'},
          {label: 'Option B', value: 'b'}, 
          {label: 'Option C', value: 'c'},
          {label: 'Option C', value: 'd'},
        ],
      },
    }
  ];
  submit(model) {
    this.results = model;
    console.log(model);
  }
  constructor() { }

 
  public ngOnInit() {
  }

}
