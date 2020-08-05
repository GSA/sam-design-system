import { Component, OnInit, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit {
  @Input() message: string;
  fields: FormlyFieldConfig[];
  model: any;
  form: FormGroup;
  options: FormlyFormOptions;
  constructor(private dialogService: SdsDialogService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      fullRecord: new FormControl(false, Validators.required),
      summaryInfo: new FormControl(false, Validators.required),
      caseRecords: new FormControl(false, Validators.required),
      currentRecord: new FormControl(false, Validators.required),
      savedSearch: new FormControl(false, Validators.required),
    });

    this.model = {
      name: '',
      fullRecord: false,
      summaryInfo: false,
      caseRecords: false,
      currentRecord: false,
      savedSearch: true,

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
      },
      {}
    ];

    this.options = {};
  }
  onSubmit(){
  console.log(this.model)
  }
}

