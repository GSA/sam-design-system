import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-text-child',
  templateUrl: './formly-text-child.component.html',
})
export class FormlyTextChildComponent {
  textModel = 'test';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'customtext',
      templateOptions: {},
    },
  ];

  // Method to programatically set the FormControl value which gets converted to the items array through the writeValue method
  setModelVal() {
    this.form.get('title').patchValue(['one', 'two', 'ten']);
  }
}
