import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-daterange`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span class="text-bold"> 
      {{value[daterangepickerOptions.fromDateKey] | date: 'mediumDate'}} - 
      {{value[daterangepickerOptions.toDateKey] | date: 'mediumDate'}}
    </span>
  `
})
export class ReadonlyDaterangeComponent {
  @Input() label: string;
  @Input() value: any;
  @Input() daterangepickerOptions = {
    fromDateKey: 'fromDate',
    toDateKey: 'toDate'
  };
}