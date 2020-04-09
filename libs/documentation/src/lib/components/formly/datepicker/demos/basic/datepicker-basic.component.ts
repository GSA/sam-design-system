import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { maxDateValidator, minDateValidator } from '@gsa-sam/sam-formly';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  templateUrl: './datepicker-basic.component.html',
  styleUrls: ['./datepicker-basic.component.scss']
})

export class FormlyDatepickerBasic implements OnInit {
  results: any = {};
  form = new FormGroup({});
  model:any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  fields: FormlyFieldConfig[] = [

    {
      key: 'expirationDateOpen',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (no validation)',
      }
    },
    {
      key: 'expirationDateMin',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (Min only Validation)',
        minDate: new Date(2019, 9, 5)
      }
    },
    {
      key: 'expirationDatemax',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (Max only Validation)',
        maxDate: new Date(2019, 9, 25)
      }
    },
    {
      key: 'expirationDateboth',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (Min and Max Validation)',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    },
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      templateOptions: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2019, 9, 25)
      }
    }

  ];

  constructor(private change: ChangeDetectorRef) {}

  changes(value) {
    console.log(value);
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
    );
  }

}
