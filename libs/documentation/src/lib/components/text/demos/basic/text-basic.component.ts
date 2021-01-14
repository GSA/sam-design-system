import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './text-basic.component.html',
  selector: `sds-text-demo`,
})
export class TextBasic {
  textModel = 'test';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'customtext',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.'
      }
    }
  ];

  // Method to programatically set the FormControl value which gets converted to the items array through the writeValue method
  setModelVal() {
    this.form.get('title').patchValue(['one', 'two', 'ten']);
  }
}
