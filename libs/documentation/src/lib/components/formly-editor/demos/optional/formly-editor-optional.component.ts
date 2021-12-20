import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './formly-editor-optional.component.html',
  selector: `sds-formly-editor-optional-demo`,
})
export class EditorOptional {

  form = new FormGroup({});
  modelOnBlur = {};
  blurFields: FormlyFieldConfig[] = [
    {
      key: 'searchText',
      type: 'editor',
      templateOptions: {
        label: 'Search Text',
        hideOptional: true,
        placeholder: 'eg: type text..',
        regex: /hello/gm,
        validateOnBlur: true

      }
    }
  ];
}
