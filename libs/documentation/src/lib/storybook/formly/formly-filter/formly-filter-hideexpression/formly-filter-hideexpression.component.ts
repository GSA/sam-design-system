import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-filter-hideexpression',
  templateUrl: './formly-filter-hideexpression.component.html',
})
export class FormlyFilterHideExpressionComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'location.country',
      type: 'select',
      props: {
        label: 'Select Country',
        description: 'Select country.',
        required: true,
        options: [
          { label: 'United States of America', value: 'USA' },
          { label: 'Canada', value: 'CA' },
          { label: 'India', value: 'IND' },
          { label: 'Mexico', value: 'MX' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Australia', value: 'AUS' },
        ],
      },
      hooks: {
        onChanges: (field) => {
          field.form.controls['items1'].valueChanges.subscribe((value: any[]) => {
            Object.keys(this.form['controls']['location']['controls']).forEach((key) => {
              if (key !== 'country') {
                this.form['controls']['location']['controls'][key].setValue('');
              }
            });
          });
        },
      },
    },
    {
      key: 'location.province',
      type: 'select',
      props: {
        label: 'Select province',
        description: 'Select province.',
        required: true,
        options: [
          { label: 'Manitoba', value: 'MB' },
          { label: 'Newfoundland and Labrador', value: 'NL' },
          { label: 'Prince Edward Island', value: 'PE' },
          { label: 'Nova Scotia', value: 'NS' },
          { label: 'New Brunswick', value: 'NB' },
          { label: 'Quebec', value: 'QC' },
          { label: 'Ontario', value: 'ON' },
          { label: 'Saskatchewan', value: 'SK' },
          { label: 'Alberta', value: 'AB' },
          { label: 'Yukon', value: 'YT' },
          { label: 'Nunavut', value: 'NU' },
        ],
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          return this.model.location.country !== 'CA';
        }
        return true;
      },
    },
    {
      key: 'location.state',
      type: 'input',
      props: {
        label: 'State',
        description: 'State',
        placeholder: 'Illinois',
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          return this.model.location.country === 'CA';
        }
        return true;
      },
    },
    {
      key: 'location.city',
      type: 'input',
      props: {
        label: 'City',
        description: 'City',
        placeholder: 'Chicago',
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          (this.model.location.state || (this.model.location.province && this.model.location.country === 'CA'))
        );
      },
    },
    {
      key: 'location.street',
      type: 'input',
      props: {
        label: 'Street',
        hideOptional: true,
        description: 'Street',
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          (this.model.location.state || (this.model.location.province && this.model.location.country === 'CA')) &&
          this.model.location.city
        );
      },
    },
  ];
}
