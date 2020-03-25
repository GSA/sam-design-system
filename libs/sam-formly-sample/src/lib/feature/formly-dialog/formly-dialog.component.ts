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
  export interface DialogData {
    keyword: boolean;
    title: boolean;
    currentDate: boolean;
    publishDate: boolean;
    lastModifiedDate: boolean;
    FederalFilter: boolean;
    noticeFilter: boolean;
    ExpirationDateFilter: boolean;
  }

@Component({
    selector: 'sds-dialog-sample-data',
    templateUrl: 'formly-advanced-filters-dialog.html'
  })
  export class DialogAdvancedFilterDialog {
    constructor(
      public dialogRef: SdsDialogRef<DialogAdvancedFilterDialog>,
      @Inject(SDS_DIALOG_DATA) public data: DialogData
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  @Component({
    selector: 'sds-formly-dialog',
    templateUrl: './formly-dialog.component.html'
  })
export class FormlyDialogComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  keyword: boolean = true;
  title: boolean = true;
  currentDate: boolean = false;
  publishDate: boolean = true;
  lastModifiedDate: boolean = true;
  FederalFilter: boolean = true;
  titleText:"";
  noticeFilter: boolean = false;
  ExpirationDateFilter: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);
  

  fields: FormlyFieldConfig[] = [      
    {
      type: 'input',
      key:'keywordFilter',
      
      templateOptions: {
        label: 'Keyword',
        model: this.model.keywordFilter
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
              hide: true,
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
          hide: true,
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
    this.model.currentDate=false;
    this.model.noticeFilter=false;
    
  }
}








