import { Component, OnInit, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit {
  @Input() message: string;
  fields: FormlyFieldConfig[];
  model: any;
  form: FormGroup
  constructor(private dialogService: SdsDialogService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
    })

    this.model = {
      id: 123,
      name: 'Bazooka Joe',
      dateOfBirth: '2001-01-01T05:00:00.000Z'
    };

    this.fields = [
      {
        key: 'id'
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Name',
        }
      },
      {
        key: 'dateOfBirth',
        type: 'datepicker',
        templateOptions: {
          required: true,
          label: 'Date Of Birth',
        }
      },
    ];

  }

}
