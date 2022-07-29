import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
})
export class AdvancedSearch {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'advancedsearch',
      templateOptions: {
        label: 'Keyword (with label)',
        ariaHidden: true,
      },
      fieldGroup: [
        {
          key: 'ddsearchmodel',
          type: 'search',
          templateOptions: {
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
