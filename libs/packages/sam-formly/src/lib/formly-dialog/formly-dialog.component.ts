import { Component, Inject, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

import { SdsFormlyDialogData } from './formly-dialog-data.model';
import { SdsAdvancedFiltersService } from '../formly-filters/advanced-filters/sds-advanced-filters.service';

@Component({
  selector: 'sds-formly-dialog',
  templateUrl: './formly-dialog.component.html'
})
export class SdsFormlyDialogComponent implements OnInit {
  dialogModel: any = {};
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  cancel: string;
  submit: string;
  hasToggle: boolean = true;
  toggleLabel: string = '';
  toggleChecked;

  constructor(
    public advancedFiltersService: SdsAdvancedFiltersService,
    public dialogRef: SdsDialogRef<SdsFormlyDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit() {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
    this.cancel = this.data.cancel ? this.data.cancel : 'Cancel';
    this.submit = this.data.submit ? this.data.submit : 'Submit';
    this.toggleLabel = (this.data.toggleModel && this.data.toggleModel.lable) ? this.data.toggleModel.lable : '';
    this.toggleChecked = (this.data.toggleModel && this.data.toggleModel.defaultValue) ? this.data.toggleModel.defaultValue : false;
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogModel.model = this.model;
      this.dialogModel.toggleChecked = this.toggleChecked;
      this.dialogRef.close(this.dialogModel);
    }
  }
  toggleChanged(ev) {
    this.toggleChecked = ev.target.checked;
  }
  onCancel() {
    this.options.resetModel();
    this.dialogRef.close();
  }
}
