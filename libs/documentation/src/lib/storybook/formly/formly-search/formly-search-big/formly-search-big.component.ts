import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-big',
  templateUrl: './formly-search-big.component.html',
})
export class FormlySearchBigComponent {
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
            id: 'search',
            label: 'Big Search',
            searchSettings: {
              id: 'search',
              size: 'large',
              placeholder: 'eg: Acme Corporation',
            },
          },
        },
      ],
    },
  ];
}
