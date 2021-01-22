import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-tags.component.html',
  selector: `sds-templateoptions-tags-demo`,
})
export class TemplateOptionsTags {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        tagText: 'SAM'
      }
    }
  ];

  fieldsTagsColor: FormlyFieldConfig[] = [
    {
      key: 'entitytag',
      type: 'input',
      templateOptions: {
        label: 'Entity',
        tagText: 'DUNS',
       tagClass: 'sds-tag--info-purple'
      }
    }
  ];
}
