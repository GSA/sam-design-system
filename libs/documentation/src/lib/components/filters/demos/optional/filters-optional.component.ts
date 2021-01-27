import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-optional.component.html',
  styleUrls: ['./filters-optional.component.scss'],
  selector: `sds-filters-optional-demo`,
})
export class FiltersOptional implements OnInit {
  constructor() {}

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  // Groups

  // Default Multiple Controls
  sdsGroupDefaultMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'panel'
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
              { label: 'Wage Determination', value: 'wd' }
            ]
          }
        },
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        }
      ]
    }
  ];

  // Accordion Multiple Controls
  sdsGroupAccordionMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      templateOptions: {
        label: 'Entity Information',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Unique Entity ID',
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple'
          }
        },
        {
          key: 'multiple.accordion.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true
          }
        }
      ]
    }
  ];

  // Default Single Control
  sdsGroupDefaultSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.default.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'panel',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  // Accordion Single Control
  sdsGroupAccordionSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.accordion.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'accordion',
        placeholder: 'Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true
      }
    }
  ];

  
  public ngOnInit() {
    this.filterChange$.subscribe(res => {
      this.results = res;
    });
  }
}
