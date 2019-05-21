import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'sam-formly-input',
  templateUrl: './formly-input.component.html',
  styleUrls: ['./formly-input.component.scss']
})
export class FormlyInputComponent implements OnInit {

  form = new FormGroup({});
  model = { text: '', text1: '', select: ''};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Formly input type text',
        placeholder: 'placeholder',
        inputType: 'text',
        min: 13,
        max: 40,
        required: true,
        inputStyle:'success'
      },
    },
    {
      key: 'text1',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Formly input type number with error style',
        placeholder: 'placeholder',
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
          {label: 'Iron Man', value: 'iron_man', group: 'Male'},
          {label: 'Captain America', value: 'captain_america', group: 'Male'},
          {label: 'Black Widow', value: 'black_widow', group: 'Female'},
          {label: 'Hulk', value: 'hulk', group: 'Male'},
          {label: 'Captain Marvel', value: 'captain_marvel', group: 'Female'},
        ],
      },
    },
    {
      key: 'single-select',
      type: 'select',
      templateOptions: {
        label: 'Formly select type without group',
        placeholder: 'Select without group',
        multiple: false,
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
    console.log(model);
  }
  constructor() { }

 
  public ngOnInit() {
  }

}
