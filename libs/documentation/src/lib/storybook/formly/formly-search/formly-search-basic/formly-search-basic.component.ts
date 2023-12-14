import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-basic',
  templateUrl: './formly-search-basic.component.html',
})
export class FormlySearchBasicComponent {
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
            label: 'Search',
            searchSettings: {
              placeholder: 'eg: Acme Corporation',
            },
          },
        },
      ],
    },
  ];
}
