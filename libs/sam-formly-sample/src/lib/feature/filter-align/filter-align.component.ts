import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { sdsGroupWrapper, sdsFieldWrapper, sdsFieldGroupWrapper } from '@sam-design-system/sam-formly';

@Component({
  selector: 'sds-filter-align',
  templateUrl: './filter-align.component.html',
})
export class FilterAlignComponent implements OnInit {

  constructor() { }

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  sdsGroupWrapperAccordion: FormlyFieldConfig[] = [
    {
      key: 'filters',
      wrappers: sdsGroupWrapper,
      templateOptions: {
        label: 'Keyword',
        isAccordionFilter: true,
      },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Status Select',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
        {
          key: 'entityName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
      ]
    }];

  
  sdsGroupWrapper: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: {
        label: 'Keyword',
        ariaHidden: true
      },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Unique Entity ID',
          tagText: 'DUNS',
          tagClass: 'sds-tag--info-purple',
         }
      }]
    }];
  
    sdsFieldGroupWrapper: FormlyFieldConfig[] = [
    {
      key: 'searchaccordion',
      wrappers: sdsFieldGroupWrapper,
      type: 'input',
      templateOptions: {
        label: 'Keyword (with label)',
        description: 'FieldGroup wrapper without accordion',
        required: true,
        isAccordionFilter: false,
        labelClass: 'usa-sr-only',
      }
    }];

  sdsFieldGroupWrapperAccordion: FormlyFieldConfig[] = [
    {
      key: 'searchaccordion',
      wrappers: sdsFieldGroupWrapper,
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        description: 'Field Group wrapper with accordion',
        required: true,
        isAccordionFilter: true
      },
    }];

  sdsFieldWrapper: FormlyFieldConfig[] = [
    {
      key: 'fieldSearch',
      wrappers: sdsFieldWrapper,
      type: 'input',
      templateOptions: {
        label: 'Field Search',
        description: 'Field wrapper without accordion',
        required: true,
      },
    },
  ];

  customWrapper: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['label', 'validation'],
      type: 'input',
      templateOptions: {
        label: 'Keyword (with label)',
        description: 'custom wrappers without description',
        required: true,
      },
    },
  ];

  public ngOnInit() {
    this.filterChange$.subscribe(
      res => {
        this.results = res;
      }
    );
  }
}
