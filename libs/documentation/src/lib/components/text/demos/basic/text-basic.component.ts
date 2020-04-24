import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './text-basic.component.html'
})
export class TextBasic {
  textModel = 'test' ;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.title',
      type: 'customtext',
      templateOptions: {
        label: 'Entity Name',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
      },
    }
  ];

}
