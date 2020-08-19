import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

export interface SdsDownloadData {
  fields: FormlyFieldConfig[];
  originalFields: FormlyFieldConfig[];
  originalModel: any;
  cancel?: string;
  form?: FormGroup;
  model?: object;
  submit?: string;
}

@Component({
  selector: 'sds-download-modal',
  templateUrl: './download-modal.component.html'
})
export class SdsDownloadModalComponent implements OnInit {
  @Output() onFormGroupChange: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  model: any;
  fields: FormlyFieldConfig[];
  submit: string;

  constructor(
    public dialogRef: SdsDialogRef<SdsDownloadModalComponent>,
    @Inject(SDS_DIALOG_DATA) public data: SdsDownloadData
  ) {}

  ngOnInit(): void {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.submit = this.data.submit ? this.data.submit : 'Submit';
  }

  onSubmit() {
    const results = this.dialogRef.close(this.data.model);
    this.onFormGroupChange.emit(results);
  }

  cancel() {
    this.dialogRef.close();
  }
}
