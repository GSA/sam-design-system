import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { sdsGroupWrapper, sdsFieldWrapper } from '@sam-design-system/sam-formly';

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
  fields: FormlyFieldConfig[] = [
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


  customform = new FormGroup({});

  customfields: FormlyFieldConfig[] = [
    {
      key: 'filters',
      wrappers: [...sdsGroupWrapper],
      templateOptions: {
        label: 'Keyword',
        isAccordionFilter: true,
      },
      fieldGroup: [{
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'Search',
          hideLabel: true,

        },
      }]
    },
  ];

  accordionfields: FormlyFieldConfig[] = [
    {
      key: 'searchaccordion',
      wrappers: [...sdsGroupWrapper],
      type: 'input',
      templateOptions: {
        label: 'Keyword (without label)',
        description: 'Group wrapper with accordion',
        required: true,
        labelClass: 'usa-sr-only',
        isAccordionFilter: true
      },
    },
  ];

  accordionwithoutfields: FormlyFieldConfig[] = [
    {
      key: 'searchaccordion',
      wrappers: [...sdsGroupWrapper],
      type: 'input',
      templateOptions: {
        label: 'Keyword (with label)',
        description: 'Group wrapper without accordion',
        required: true,
       
        isAccordionFilter: false
      },
    },
  ];


  fieldWrapper: FormlyFieldConfig[] = [
    {
      key: 'fieldSearch',
      wrappers: [...sdsFieldWrapper],
      type: 'input',
      templateOptions: {
        label: 'Field Search',
        description: 'Field wrapper without accordion',
        required: true,
        isAccordionFilter: false
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
