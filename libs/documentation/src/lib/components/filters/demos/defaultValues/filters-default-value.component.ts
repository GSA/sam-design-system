import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { filterFields } from './fields';

@Component({
  selector: `sds-filters-default-value-demo`,
  templateUrl: './filters-default-value.component.html',
})
export class FiltersDefaultValueComponent {
  form = new UntypedFormGroup({});
  model: any = {
    title: 'Acme Corporation',
  };

  // Values you'd like the form to be reset to when reset all is slicked
  defaultModel: any = {
    title: 'All Entities',
  };

  fields = filterFields;
}
