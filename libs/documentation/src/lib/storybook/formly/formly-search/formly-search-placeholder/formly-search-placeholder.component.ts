import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-placeholder',
  templateUrl: './formly-search-placeholder.component.html',
})
export class FormlySearchPlaceholderComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'filter',
      props: {
        label: 'Keyword (with label)',
        ariaHidden: true,
      },
      fieldGroup: [
        {
          key: 'searchmodel',
          type: 'search',
          props: {
            searchSettings: {
              placeholder: 'eg: Acme Corporation',
            },
          },
        },
      ],
    },
  ];
}
