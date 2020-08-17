import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sds-download-display',
  templateUrl: './form-download/template.html'
})
export class SdsDownloadDisplayComponent implements OnInit {
  @Input() message: string;
  updatedModel: any;

  modelHandler(value) {
    this.updatedModel = value;
  }
  constructor() {}
  ngOnInit() {}

  form = new FormGroup({});

  model: object = {
    name: '',
    fullRecord: false,
    summaryInfo: false,
    caseRecords: false,
    currentRecord: false,
    savedSearch: true,
    fileType: ''
  };

  fields = [
    {
      key: 'fullRecord',
      type: 'checkbox',
      templateOptions: {
        label: 'Download full record.',
        required: true
      }
    },
    {
      key: 'summaryInfo',
      type: 'checkbox',
      templateOptions: {
        label: 'Download summary information only.',
        required: true
      }
    },
    {
      key: 'caseRecords',
      type: 'checkbox',
      templateOptions: {
        label: 'Download FDPS case records.',
        required: true
      }
    },
    {
      key: 'currentRecord',
      type: 'checkbox',
      templateOptions: {
        label: 'Download current record and all of its modification.',
        required: true
      }
    },
    {
      key: 'fileType',
      type: 'radio',
      templateOptions: {
        label: 'Select File Type',
        required: true,
        options: [
          {
            key: 'csv',
            value: 'CSV File'
          },
          {
            key: 'pdf',
            value: 'PDF File'
          },
          {
            key: 'zip',
            value: 'Zip File'
          }
        ]
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name'
      }
    },
    {
      key: 'savedSearch',
      type: 'checkbox',
      templateOptions: {
        label: 'Add to my Saved Searches.',
        required: false
      }
    }
  ];
}
