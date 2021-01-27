import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './filters-showInactiveFilterValues.component.html',
  selector: `sds-inactive-filters-demo`,
})
export class FiltersShowInactiveFilterValues {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Select Country',
        options: [
          { label: 'United States of America', value: 'USA' },
          { label: 'Canada', value: 'CA' },
          { label: 'India', value: 'IND' },
          { label: 'Mexico', value: 'MX' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Australia', value: 'AUS' }
        ]
      }
    }
  ];
  showInactiveFilterValues = false;

  showInactiveFiltersUpdate(value){
    console.log('Show Inactive Filter Values has changed')
    if(value !== this.showInactiveFilterValues){
      this.showInactiveFilterValues = value;
      const temp = JSON.parse(JSON.stringify(this.sdsSelect));
      if(value){
        (temp[0].templateOptions.options as Array<any>).push({ label: 'New Zealand *', value: 'NZ' });
      } else {
        (temp[0].templateOptions.options as Array<any>).pop();
      }
      this.sdsSelect = temp
    }
  }
}
