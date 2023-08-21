import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { filterFields } from './fields';

@Component({
  selector: 'sds-formly-filter-nested',
  templateUrl: './formly-filter-nested.component.html',
})
export class FormlyFilterNestedComponent {
  form = new FormGroup({});
  model: any = {
    title: 'Acme Corporation',
  };
  options: FormlyFormOptions = {};
  fields = filterFields;
  defaultModel: any = {
    title: 'All Entities',
  };
}
