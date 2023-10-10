import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  templateUrl: './templateoption-tags.component.html',
  selector: `sds-templateoptions-tags-demo`,
})
export class TemplateOptionsTags {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity',
      type: 'input',
      props: {
        label: 'Entity',
        tagText: 'SAM',
      },
    },
  ];

  fieldsTagsColor: FormlyFieldConfig[] = [
    {
      key: 'entitytag',
      type: 'input',
      props: {
        label: 'Entity',
        tagText: 'DUNS',
        tagClass: 'sds-tag--info-purple',
      },
    },
  ];
}
