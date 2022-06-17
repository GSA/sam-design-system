import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearch {

  form = new FormGroup({});
  model: any = {advancedSearch: ''};; 
  options: FormlyFormOptions = {};
  advancedSearch = "";
  advancedSearchUrl = "/documentation/components/formly-search/examples";
 
  fields: FormlyFieldConfig[] = [
    {
      key: 'advanced search',
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
            description: this.model.advancedSearch,
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

  chooseAdvancedSearch(model) {
    console.log(model);
    this.model.advancedSearch = 'Advanced Search'
  }
}
