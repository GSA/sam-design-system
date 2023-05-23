import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-editor-basic',
  templateUrl: './formly-editor-basic.component.html',
})
export class FormlyEditorBasicComponent {
  textModel = 'test';
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'searchkey',
      type: 'editor',
      templateOptions: {
        label: 'Search',
        placeholder: 'eg: type here',
        regex: /hello/gm,
      },
    },
  ];
}
