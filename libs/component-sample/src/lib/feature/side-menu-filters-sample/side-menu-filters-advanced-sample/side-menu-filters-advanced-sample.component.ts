import { Component } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

import { SIDE_MENU_FILTERS_ADVANCED_SAMPLE_DATA } from '../side-menu-filters-sample.data';

@Component({
  selector: 'sds-side-menu-filters-advanced-sample',
  templateUrl: './side-menu-filters-advanced-sample.component.html',
})

export class SideMenuFiltersAdvancedSampleComponent {

  form: FormGroup = new FormGroup({});
  model: object = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_ADVANCED_SAMPLE_DATA;

  constructor( ) { }
}
