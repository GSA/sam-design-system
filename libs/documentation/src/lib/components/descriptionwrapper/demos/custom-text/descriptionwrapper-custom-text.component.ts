import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './descriptionwrapper-custom-text.component.html',
  selector: `sds-descriptionwrapper-demo`,
})
export class DescriptionWrapperCustomText {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['description'],
      key: 'Description',
      defaultValue: null,
      type: 'input',
      props: {
        description:
          'Please describe your specific situation. <ul><li>my current registration</li><li>My legal business name has been changed</li></ul>',
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
