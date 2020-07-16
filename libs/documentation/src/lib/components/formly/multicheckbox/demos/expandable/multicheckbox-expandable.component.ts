import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-expandable.component.html'
})
export class MultiCheckboxExpandable {
  form = new FormGroup({});
  model: any = {};
  isCollapseContent = false;
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
        collapseContent: this.isCollapseContent,
        options: [
          {
            key: 'AL',
            value: 'Alabama'
          },
          {
            key: 'AK',
            value: 'Alaska'
          },
          {
            key: 'AZ',
            value: 'Arizona'
          },
          {
            key: 'AR',
            value: 'Arkansas'
          },
          {
            key: 'CA',
            value: 'California'
          },
          {
            key: 'CO',
            value: 'Colorado'
          },
          {
            key: 'CT',
            value: 'Connecticut'
          },
          {
            key: 'DE',
            value: 'Delaware'
          },
          {
            key: 'DC',
            value: 'District Of Columbia'
          },
          {
            key: 'FL',
            value: 'Florida'
          },
          {
            key: 'GA',
            value: 'Georgia'
          },
          {
            key: 'HI',
            value: 'Hawaii'
          },
          {
            key: 'ID',
            value: 'Idaho'
          },
          {
            key: 'IL',
            value: 'Illinois'
          },
          {
            key: 'IN',
            value: 'Indiana'
          }
        ]
      }
    }
  ];
  onChange(ev) {
    this.isCollapseContent = !this.isCollapseContent;
    this.fields[0].templateOptions.collapseContent = this.isCollapseContent;
  }
}
