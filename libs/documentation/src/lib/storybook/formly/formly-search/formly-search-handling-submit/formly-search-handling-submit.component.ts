import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-search-handling-submit',
  templateUrl: './formly-search-handling-submit.component.html',
})
export class FormlySearchHandlingSubmitComponent {
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
            submitHandler: this.handleSubmit,
            searchSettings: {
              placeholder: 'eg: Acme Corporation',
            },
          },
        },
      ],
    },
  ];

  handleOnModelChange(value) {
    console.log(value);
  }
  handleSubmit(value) {
    console.log('submitted', value);
  }
}
