import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-configurable',
  templateUrl: './formly-filter-configurable.component.html',
})
export class FormlyFilterConfigurableComponent {
  @Input('config')
  set config(config: object) {
    const temp = this.fields[0];
    temp['templateOptions'] = config;
    this.fields = [temp];
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'panel',
      },
      fieldGroup: [
        {
          key: 'entity.type',
          type: 'select',
          templateOptions: {
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
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'eg: Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true,
          },
        },
      ],
    },
  ];

}
