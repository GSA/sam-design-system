import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-button-configurable',
  templateUrl: './formly-button-configurable.component.html',
})
export class FormlyButtonConfigurableComponent {
  @Input('config')
  set config(config: object) {
    const temp = this.fields[0];
    temp['props'] = config;

    if (config['enableInput']) {
      temp['props'].additionalField = this.inputField;
    } else {
      temp['props'].additionalField = null;
      this.model = {};
    }
    if (config['hasModel']) {
      this.model = { search: 'Test' };
    }
    this.fields = [temp];
  }
  inputField = {
    key: 'search',
    type: 'input',
    focus: true,
    props: {
      label: 'Search',
      placeholder: '',
    },
  };

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      props: {
        text: 'Search',
      },
    },
  ];
}
