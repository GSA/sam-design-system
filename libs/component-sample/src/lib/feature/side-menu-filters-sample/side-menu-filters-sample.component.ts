import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SIDE_MENU_FILTERS_SAMPLE_DATA } from './side-menu-filters-sample.data';

@Component({
  selector: 'sds-side-menu-filters-sample',
  templateUrl: 'side-menu-filters-sample.component.html'
})
export class SideMenuFiltersSampleComponent {
  form = new FormGroup({});
  model: object = {};
  fields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_SAMPLE_DATA;
}
