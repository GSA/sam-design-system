import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit, OnChanges{
  @Output() private onFormGroupChange = new EventEmitter<any>();

  @Input() message: string;
  fields: FormlyFieldConfig[];
  model: any;
  form: FormGroup;
  options: FormlyFormOptions;
  constructor(private dialogService: SdsDialogService) {}


  // get diagnostics() {return JSON.stringify(this.model, null, 2);}

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
    //console.log(this.model);
    //this.onFormGroupChange.emit(this.model);

    // this.httpclient.get(url of the actual file)
    of('filecontent').subscribe(
      fileContent => {
        let fileMimeType = 'text/plain';

        switch(this.model.fileType) {
          case 'pdf':
            fileMimeType = '/downloads/archive.pdf';
            break;
          case 'csv':
            fileMimeType = '/downloads/archive.csv';
          case 'zip':
            fileMimeType = '/downloads/archive.zip';

        }


        const fileBlob = new Blob([fileContent], {type: fileMimeType});
        const a = document.createElement('a');
        a.download = name;
        a.href = window.URL.createObjectURL(fileBlob);
        a.click();
      }
    );
  }

  onSelectPredefined(event, name, fileType) {
    event.preventDefault();
    this.form.get('name').setValue(name);
    this.form.get('fileType').setValue(fileType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onSelect()

  }
  onSelect() {
    this.form.get('name').setValue(name);
    this.form.get('options').setValue(name);
  }

  onCancel(){
      this.form.reset()
    }

}

