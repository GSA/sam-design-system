import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-advanced',
  styleUrls: ['./formly-search-advanced.component.scss'],
  templateUrl: './formly-search-advanced.component.html',
})
export class FormlySearchAdvancedComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'advancedsearch',
      props: {
        label: 'Keyword (with label)',
        ariaHidden: true,
      },
      fieldGroup: [
        {
          key: 'ddsearchmodel',
          type: 'search',
          props: {
            label: 'Search with dropdown',
            hideLabel: true,
            description: '<a href="#" class="float-right usa-link">Advanced Search</a>',
            hideDescription: true,
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
