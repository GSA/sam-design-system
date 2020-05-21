import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { formlyFieldConfig } from './fields';

@Component({
  templateUrl: './filter-config.component.html'
})
export class FiltersConfig {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  formlyFieldConfig: FormlyFieldConfig[] = formlyFieldConfig;
}
