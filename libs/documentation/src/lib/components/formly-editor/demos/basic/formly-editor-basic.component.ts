import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './formly-editor-basic.component.html',
  selector: `sds-formly-editor-demo`,
})
export class EditorBasic {
  textModel = 'test';
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'searchkey',
      type: 'editor',
      props: {
        label: 'Search',
        placeholder: 'eg: type here',
        regex: /hello/gm,
      },
    },
  ];
}
