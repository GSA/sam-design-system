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
    this.configurations.title = this.data.configurations.title;
    this.configurations.submitButtonText = this.data.configurations.submitButtonText;
    this.configurations.cancelButtonText = this.configurations.cancelButtonText
      ? this.configurations.cancelButtonText
      : 'Cancel';

    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.originalModel ? this.data.originalModel : {};
    this.options = this.data.options ? this.data.options : {};
  }

  onSubmit() {
    console.log(this.model, 'model');
    console.log(this.data.originalModel, ' original model');
    if (this.form.valid) {
      this.dialogRef.close(this.model);
    }
  }

  onCancel() {
    console.log(this.model, 'model');
    console.log(this.data.originalModel, ' original model');
    this.dialogRef.close();
  }
}
