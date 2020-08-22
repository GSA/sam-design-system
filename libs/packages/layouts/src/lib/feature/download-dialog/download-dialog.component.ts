import { Component, Inject, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-dialog',
  templateUrl: './download-dialog.component.html'
})
export class SdsDownloadDialogComponent implements OnInit {
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  cancel: string;
  submit: string;
  configurations: any = {};

  constructor(
    public dialogRef: SdsDialogRef<SdsDownloadDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit() {
    this.fields = this.data.fields;
    this.configurations = this.data.configurations;
    this.configurations.title = this.data.configurations.title
      ? this.data.configurations.title
      : 'Download';
    this.configurations.submitBtnText = this.data.configurations.submitBtnText
      ? this.data.configurations.submitBtnText
      : 'Submit';
    this.configurations.cancelBtnText = this.configurations.cancelBtnText
      ? this.configurations.cancelBtnText
      : 'Cancel';

    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.model);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
