import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as _ from 'lodash-es';

import { SIDE_MENU_FILTERS_SAMPLE_DATA } from './side-menu-filters-sample.data';

@Component({
  selector: 'sds-side-menu-filters-sample',
  templateUrl: 'side-menu-filters-sample.component.html'
})
export class SideMenuFiltersSampleComponent {
  form = new FormGroup({});
  model: object = {};
  examples = [
    { id: _.uniqueId(), form: SIDE_MENU_FILTERS_SAMPLE_DATA },
    { id: _.uniqueId(), form: SIDE_MENU_FILTERS_SAMPLE_DATA },
    { id: _.uniqueId(), form: SIDE_MENU_FILTERS_SAMPLE_DATA }
  ];
  forms: FormGroup[] = [];
  models: any[] = [];

  onModelChange(model: object) {
    console.log('default', model);
    this.model = model;
  }

  ngOnInit() {
    this.examples.forEach(example => {
      this.forms.push(new FormGroup({}));
      this.models.push({
        id: example.id,
        model: {}
      });
    });
  }
}
