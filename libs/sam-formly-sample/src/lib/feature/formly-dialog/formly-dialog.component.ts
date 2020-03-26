import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig,FormlyFormOptions, Field } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import {
    SdsDialogService,
    SdsDialogRef,
    SDS_DIALOG_DATA
  } from '@gsa-sam/components';
import { removeSummaryDuplicates } from '@angular/compiler';
import { text } from '@angular/core/src/render3';
import { _MatButtonMixinBase } from '@angular/material/button';
  @Component({
    selector: 'sds-formly-dialog',
    templateUrl: './formly-dialog.component.html'
  })
export class FormlyDialogComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  public filterChange$ = new BehaviorSubject<object>(null);
  

  fields: FormlyFieldConfig[] = [      
    {
      type: 'input',
      key:'keywordFilter',
      templateOptions: {
        label: 'Keyword',
      },
      },
      {
        type: 'input',
        key:'titleFilter',
        templateOptions: {
          type: 'input',
          label: 'Title',
        },
        },
        {
          key: 'expirationDate',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Date' },
          fieldGroup: [
            {
              key: 'currentDateFilter',
              type: 'datepicker',
              hideExpression: true,
              templateOptions: {
                label: 'Current Date',
              }
            },
            {
              key: 'publishDateFilter',
              type: 'datepicker',
              templateOptions: {
                label: 'Publish Date',
              }
            },
            {
              key: 'lastModifiedDateFilter',
              type: 'datepicker',
              templateOptions: {
                label: 'Last Modified Date',
              }
            },
          ]
        },
        {
          key: 'FederalOrganisations',
          wrappers: ['accordionwrapper'],
          hideExpression: true,
          templateOptions: { label: 'Federal Organisations' },
          fieldGroup: [
            {
              key: 'FederalFilter',
              type: 'input',
              templateOptions: {
                label:''
              }
            },
          ]
        },
        {
          key: 'NoticeType',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Notice Type' },
          fieldGroup: [
            {
              key: 'statusCheckbox',
              type: 'multicheckbox',
              templateOptions: {
                label: '',
                options: [
                  {
                    key: 'Active',
                    value: 'Active'
                  },
                  {
                    key: 'Inactive',
                    value: 'Inactive'
                  },
                  
                ]
              },
            },
          ]
        }
  ]

  constructor(public dialog: SdsDialogService) {}

  ngOnInit() {
    if (localStorage.getItem("initialFields") === null) 
    {
      localStorage.setItem("initialFields", JSON.stringify(this.fields));
    }
  }
}








