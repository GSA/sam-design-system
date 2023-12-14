import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-expandable.component.html',
  selector: `sds-formly-multicheckbox-expandable-demo`,
})
export class MultiCheckboxExpandable {
  form = new UntypedFormGroup({});
  model: any = {};
  isexpandedOptions = false;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.socioeconomic',
      type: 'multicheckbox',
      props: {
        label: 'States',
        description: 'Select any state',
        required: true,
        selectAllOption: true,
        expandableOptions: true,
        expandedOptions: this.isexpandedOptions,
        options: [
          {
            value: 'AL',
            label: 'Alabama',
            tagText: 'AL',
          },
          {
            value: 'AK',
            label: 'Alaska',
            tagText: 'AK',
          },
          {
            value: 'AZ',
            label: 'Arizona',
            tagText: 'AZ',
          },
          {
            value: 'AR',
            label: 'Arkansas',
            tagText: 'AR',
          },
          {
            value: 'CA',
            label: 'California',
            tagText: 'CA',
          },
          {
            value: 'CO',
            label: 'Colorado',
            tagText: 'CO',
          },
          {
            value: 'CT',
            label: 'Connecticut',
            tagText: 'CT',
          },
          {
            value: 'DE',
            label: 'Delaware',
            tagText: 'DE',
          },
          {
            value: 'DC',
            label: 'District Of Columbia',
            tagText: 'DC',
            tagClass: 'sds-tag--info-purple',
          },
          {
            value: 'FL',
            label: 'Florida',
            tagText: 'FL',
          },
          {
            value: 'GA',
            label: 'Georgia',
            tagText: 'GA',
          },
          {
            value: 'HI',
            label: 'Hawaii',
            tagText: 'HI',
          },
          {
            value: 'ID',
            label: 'Idaho',
            tagText: 'ID',
          },
          {
            value: 'IL',
            label: 'Illinois',
            tagText: 'IL',
          },
          {
            value: 'IN',
            label: 'Indiana',
            tagText: 'IN',
          },
        ],
      },
    },
  ];
  onChange(ev) {
    this.isexpandedOptions = !this.isexpandedOptions;
    this.fields[0].props.expandedOptions = this.isexpandedOptions;
  }
}
