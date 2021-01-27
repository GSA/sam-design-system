import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-expandable.component.html',
  selector: `sds-formly-multicheckbox-expandable-demo`,
})
export class MultiCheckboxExpandable {
  form = new FormGroup({});
  model: any = {};
  isexpandedOptions = false;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      templateOptions: {
        label: 'States',
        description: 'Select any state',
        required: true,
        selectAllOption: true,
        expandableOptions: true,
        expandedOptions: this.isexpandedOptions,
        options: [
          {
            key: 'AL',
            value: 'Alabama',
            tagText: 'AL'
          },
          {
            key: 'AK',
            value: 'Alaska',
            tagText: 'AK'

          },
          {
            key: 'AZ',
            value: 'Arizona',
            tagText: 'AZ'
          },
          {
            key: 'AR',
            value: 'Arkansas',
            tagText: 'AR'
          },
          {
            key: 'CA',
            value: 'California',
            tagText: 'CA'
          },
          {
            key: 'CO',
            value: 'Colorado',
            tagText: 'CO'
          },
          {
            key: 'CT',
            value: 'Connecticut',
            tagText: 'CT'
          },
          {
            key: 'DE',
            value: 'Delaware',
            tagText: 'DE'
          },
          {
            key: 'DC',
            value: 'District Of Columbia',
            tagText: 'DC',
            tagClass: 'sds-tag--info-purple'
          },
          {
            key: 'FL',
            value: 'Florida',
            tagText: 'FL',
          },
          {
            key: 'GA',
            value: 'Georgia',
            tagText: 'GA',
          },
          {
            key: 'HI',
            value: 'Hawaii',
            tagText: 'HI',
          },
          {
            key: 'ID',
            value: 'Idaho',
            tagText: 'ID',
          },
          {
            key: 'IL',
            value: 'Illinois',
            tagText: 'IL',
          },
          {
            key: 'IN',
            value: 'Indiana',
            tagText: 'IN',
          }
        ]
      }
    }
  ];
  onChange(ev) {
    this.isexpandedOptions = !this.isexpandedOptions;
    this.fields[0].templateOptions.expandedOptions = this.isexpandedOptions;
  }
}
