import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
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
  disableSubmitButton: boolean;
  firstScroll = false;

  @Output() submitFn: EventEmitter<any> = new EventEmitter();

  @Output() cancelFn: EventEmitter<any> = new EventEmitter();

  constructor(
    public advancedFiltersService: SdsAdvancedFiltersService,
    public dialogRef: SdsDialogRef<SdsFormlyDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: SdsFormlyDialogData
  ) { }

  public ngOnInit() {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
    this.cancel = this.data.cancel ? this.data.cancel : 'Cancel';
    this.submit = this.data.submit ? this.data.submit : 'Submit';
    this.disableSubmitButton = this.data.disableSubmitButtonEnabled ? this.data.disableSubmitButtonEnabled : false;

  }

  ngAfterViewInit() {
    let initialBottomValue: number;
    let initialTopValue: number
    console.log('tes')
    document.getElementsByClassName('sds-dialog-content')[0]
      .addEventListener('scroll', function (event) {

        let scrollPosition = parseInt(parseFloat(event.target['scrollTop']).toFixed(2), 10);
        let element = document.querySelectorAll('[id^="cdk-overlay"]')[1] as HTMLElement
        // let element = document.getElementsByClassName('sds-autocomplete')[0].parentElement;
        // let element = document.getElementById('cdk-overlay-8').parentElement;
        if (!this.firstScroll) {
          initialBottomValue = parseInt(element.style.bottom.replace(/[^0-9.]/g, ''), 10);
          initialTopValue = parseInt(element.style.top.replace(/[^0-9.]/g, ''), 10);
          console.log(initialTopValue, 'initialTopValue')
        }
        if (initialBottomValue) {
          element.style.bottom = (initialBottomValue + scrollPosition) + 'px';
        }
        else {
          element.style.top = (initialTopValue - scrollPosition) + 'px';
        }
        this.firstScroll = true;
      });
  }

  onSubmit() {
    this.submitFn.emit(this.model);
  }

  onCancel() {
    this.options.resetModel();
    this.cancelFn.emit(this.model);
  }
}
