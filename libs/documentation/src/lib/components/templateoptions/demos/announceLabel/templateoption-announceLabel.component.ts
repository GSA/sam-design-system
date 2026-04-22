import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
    templateUrl: './templateoption-announceLabel.component.html',
    selector: `sds-templateoptions-announcelabel-demo`,
    standalone: false
})
export class TemplateOptionAnnounceLabel {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Keyword',
      type: 'input',
      props: {
        label: 'Entity',
        announceLabel: true,
      },
    },
  ];
}
