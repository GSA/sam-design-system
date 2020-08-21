import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-hideexpression.component.html'
})
export class FiltersHideExpression implements OnInit {
  constructor() {}

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  // Select
  sdsSelect: FormlyFieldConfig[] = [
    {
      key: 'location.country',
      type: 'select',
      templateOptions: {
        label: 'Select Country',
        description: 'Select country.',
        required: true,
        options: [
          { label: 'United States of America', value: 'USA' },
          { label: 'Canada', value: 'CA' },
          { label: 'India', value: 'IND' },
          { label: 'Mexico', value: 'MX' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Australia', value: 'AUS' }
        ]
      }
    },
    {
      key: 'location.province',
      type: 'select',
      templateOptions: {
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
          { label: 'Nunavut', value: 'NU' }
        ]
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          return this.model.location.country != 'CA';
        }
        return true;
      }
    },
    {
      key: 'location.state',
      type: 'input',
      templateOptions: {
        label: 'State',
        description: 'State'
      },
      hideExpression: () => {
        if (this.model && this.model.location && this.model.location.country) {
          if (this.model.location.country != 'CA') {
            return false;
          } else if (
            this.model.location.country == 'CA' &&
            this.model.location.province
          )
            return this.model.location.country != 'CA';
        }
        return true;
      }
    },
    {
      key: 'location.city',
      type: 'input',
      templateOptions: {
        label: 'City',
        description: 'City'
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          this.model.location.state
        );
      }
    },
    {
      key: 'location.street',
      type: 'input',
      templateOptions: {
        label: 'Street',
        hideOptional: true,
        description: 'Street'
      },
      hideExpression: () => {
        return !(
          this.model &&
          this.model.location &&
          this.model.location.country &&
          this.model.location.state &&
          this.model.location.city
        );
      }
    }
  ];

  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
