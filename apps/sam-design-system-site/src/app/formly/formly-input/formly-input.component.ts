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
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Textarea with specified rows',
        placeholder: 'This has 10 rows',
        inputType: 'text',
        inputStyle:'success'
      },
    },
    {
      key: 'text1',
      type: 'input',
      templateOptions: {
        label: 'Textarea with specified rows',
        placeholder: 'This has 10 rows',
        inputType: 'number',
        inputStyle:'error',
        errorMessage: 'Helpful error message'
      },
    },
  ];
  submit() {
    alert(this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}
