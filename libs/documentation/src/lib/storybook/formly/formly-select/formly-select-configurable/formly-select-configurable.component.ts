import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-select-configurable',
  templateUrl: './formly-select-configurable.component.html',
})
export class FormlySelectConfigurableComponent {
  @Input('config')
  set config(config: any) {
    const temp = this.fields[0];
    temp['props'] = { ...temp['props'], ...config };
    if (config.options && Array.isArray(config.options)) {
      temp['props'].options = config.options.map((option) => ({ label: option, value: option }));
    }
    this.fields = [temp];
  }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.type',
      type: 'select',
      props: {
        label: 'Entity Type',
        description: 'Select the entity type.',
        required: true,
        options: [
          { label: 'Contract Opportunities', value: 'co' },
          { label: 'Entity Information', value: 'ei' },
          { label: 'Assistance Listings', value: 'al' },
          { label: 'Contract Data', value: 'cd' },
          { label: 'Federal Hierarchy', value: 'fh' },
          { label: 'Wage Determination', value: 'wd' },
        ],
      },
    },
  ];
}
