import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-label',
  templateUrl: './formly-search-label.component.html',
})
export class FormlySearchLabelComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'searchmodel',
          type: 'search',
          templateOptions: {
            label: 'Search',
          },
        },
      ],
    },
  ];
}
