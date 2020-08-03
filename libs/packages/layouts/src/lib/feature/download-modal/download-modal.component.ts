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
      dateOfBirth: new FormControl('', Validators.required)
    });

    this.model = {
      id: 'file',
      name: 'FileType.csv',
      options: 'multicheckbox'
    };

    this.fields = [
      {
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Download full record.',
          required: true
        }
      },
      {
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Download summary information only.',
          required: true
        }
      },
      {
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Download FDPS case records.',
          required: true
        }
      },{
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'Download current record and all of its modification.',
          required: true
        }
      },
      {
        key: 'gender',
        type: 'radio',
        templateOptions: {
          label: 'Select File Type',
          // placeholder: 'Placeholder',
          // description: 'Select File Type',
          // options: [
          //   { value: 1, label: 'Search Results' },
          //   { value: 2, label: 'Search Results' },
          //   { value: 3, label: 'WD Decision' },
          // ],
        },
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
        key: 'terms',
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
}
