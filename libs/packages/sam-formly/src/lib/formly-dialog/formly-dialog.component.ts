import { ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UntypedFormGroup } from '@angular/forms';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SdsFormlyDialogData } from './formly-dialog-data.model';
import { SdsAdvancedFiltersService } from '../formly-filters/advanced-filters/sds-advanced-filters.service';
import { startWith, tap } from 'rxjs';

@Component({
  selector: 'sds-formly-dialog',
  templateUrl: './formly-dialog.component.html',
})
export class SdsFormlyDialogComponent implements OnInit {
  form: UntypedFormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  cancel: string;
  submit: string;
  disableSubmitButton: boolean;

  @Output() submitFn: EventEmitter<any> = new EventEmitter();

  @Output() cancelFn: EventEmitter<any> = new EventEmitter();

  @Output() onChangeFn: EventEmitter<any> = new EventEmitter();

  constructor(
    public advancedFiltersService: SdsAdvancedFiltersService,
    private cdr: ChangeDetectorRef,
    public dialogRef: SdsDialogRef<SdsFormlyDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: SdsFormlyDialogData
  ) {}

  public ngOnInit() {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new UntypedFormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
    this.cancel = this.data.cancel ? this.data.cancel : 'Cancel';
    this.submit = this.data.submit ? this.data.submit : 'Submit';
    this.disableSubmitButton = this.data.disableSubmitButtonEnabled ? this.data.disableSubmitButtonEnabled : false;
  }

  onModelChange() {
    this.onChangeFn.emit(this.model);
  }

  onSubmit() {
    this.submitFn.emit(this.model);
  }

  onCancel() {
    this.options.resetModel();
    this.cancelFn.emit(this.model);
  }
}
