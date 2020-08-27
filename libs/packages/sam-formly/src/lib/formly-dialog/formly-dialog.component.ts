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
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  cancel: string;
  submit: string;
  isAdvanceFilter: boolean = false;

  constructor(
    public advancedFiltersService: SdsAdvancedFiltersService,
    public dialogRef: SdsDialogRef<SdsFormlyDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: SdsFormlyDialogData
  ) {}

  public ngOnInit() {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
    this.cancel = this.data.cancel ? this.data.cancel : 'Cancel';
    this.submit = this.data.submit ? this.data.submit : 'Submit';
    this.isAdvanceFilter = this.data.isAdvanceFilter
      ? this.data.isAdvanceFilter
      : false;
  }

  onSubmit() {
    if (this.form.valid) {
      let results = {};
      if (this.isAdvanceFilter) {
        results = this.advancedFiltersService.updateFields(
          this.model,
          this.data.originalFields,
          this.data.originalModel
        );
      } else {
        results = { ...this.model };
      }
      this.dialogRef.close(this.model);
    }
  }

  onCancel() {
    if (!this.isAdvanceFilter) {
      this.options.resetModel();
    }
    this.dialogRef.close();
  }
}
