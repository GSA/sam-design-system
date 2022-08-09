import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { filterFields } from './fields';

@Component({
  selector: `sds-filters-default-value-demo`,
  templateUrl: './filters-default-value.component.html',
})
export class FiltersDefaultValueComponent {
  form = new FormGroup({});
  model: any = {
    title: 'Acme Corporation',
  };

  // Values you'd like the form to be reset to when reset all is slicked
  defaultModel: any = {
    title: 'All Entities',
  };

  fields = filterFields;
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'title',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Entity Name',
  //       placeholder: 'eg: Acme Corporation',
  //       description: 'Enter the name of your entity.',
  //       required: true,
  //     },
  //   },
  // ];
}
