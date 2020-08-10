import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit {
  @Output() private onFormGroupChange = new EventEmitter<any>();

  @Input() message: string;
  fields: FormlyFieldConfig[];
  model: any;
  form: FormGroup;
  options: FormlyFormOptions;
  constructor(private dialogService: SdsDialogService, private downloads:DownloadService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      fullRecord: new FormControl(false, Validators.required),
      summaryInfo: new FormControl(false, Validators.required),
      caseRecords: new FormControl(false, Validators.required),
      currentRecord: new FormControl(false, Validators.required),
      savedSearch: new FormControl(false, Validators.required),
      fileType: new FormControl('', Validators.required)
    });

    this.model = {
      name: '',
      fullRecord: false,
      summaryInfo: false,
      caseRecords: false,
      currentRecord: false,
      savedSearch: true,
      fileType: ''

    };

    this.fields = [
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
      },{
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

    this.options = {};
  }
  onSubmit(){
  console.log(this.model)
  this.onFormGroupChange.emit(this.model)
  }

  onCancel(){

    }

    download(): void {
      this.downloads
        .download('/downloads/archive.zip')
        .subscribe(blob => {
          // const a = document.createElement('a')
          // const objectUrl = URL.createObjectURL(blob)
          // a.href = objectUrl
          // a.download = 'archive.zip';
          // a.click();
          // URL.revokeObjectURL(objectUrl);
        })
    }
}

