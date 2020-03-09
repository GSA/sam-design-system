import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { sdsFormVariable } from '@sam-design-system/sam-formly';

@Component({
  selector: 'sds-filter-align',
  templateUrl: './filter-align.component.html',

})
export class FilterAlignComponent implements OnInit {

  constructor() {

  }
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);


  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      // wrappers: ['group', ...sdsFormVariable],
      wrappers: ['label','validation'],
      type: 'input',
      templateOptions: {
        label: 'Keyword (with label)',
        description: 'testing multiple wrappers',
        required: true,
       // isAccordionFilter: true,
       // labelClass: 'usa-sr-only'
       
      },
    },
  ];
  

  customresults: any = {};
  customform = new FormGroup({});
  custommodel: any = {};
  customoptions: FormlyFormOptions = {};

  public customfilterChange$ = new BehaviorSubject<object>(null);


  customfields: FormlyFieldConfig[] = [

    {
      key: 'filters',
      wrappers: ['group', ...sdsFormVariable],
      templateOptions: { 
      label: 'Keyword',
      isAccordionFilter: true
    },
      fieldGroup: [{
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'Auto Complete',
          hideLabel: true,
         
        },
      }]
    },
  ];

  // customfields: FormlyFieldConfig[] = [
  //   {
  //     key: 'entityStatus',
  //     wrappers: [ 'customwrapper'],
  //     type: 'multicheckbox',
  //     templateOptions: {
  //       label: 'Entity Status',
  //       options: [
  //         {
  //           key: 'Active',
  //           value: 'Active'
  //         },
  //         {
  //           key: 'Draft',
  //           value: 'Draft'
  //         },
  //         {
  //           key: 'Expired',
  //           value: 'Expired'
  //         },
  //         {
  //           key: 'InProgress',
  //           value: 'In Progress'
  //         }
  //       ]
  //     }
  //   },
  // ];
  
  public ngOnInit() {
    this.filterChange$.subscribe(
      res => {
        this.results = res;
      }
    );

    this.customfilterChange$.subscribe(
      res => {
        this.customresults = res;
      }
    );
  }

}
