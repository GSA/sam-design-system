import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-daterange`,
  template: `
    <label class="usa-label">
      <span
      *ngIf="to?.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span class="text-bold"> 
      {{value[daterangepickerOptions.fromDateKey] | date: 'mediumDate'}} - 
      {{value[daterangepickerOptions.toDateKey] | date: 'mediumDate'}}
    </span>
  `
})
export class ReadonlyDaterangeComponent {
  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: any;
  @Input() daterangepickerOptions = {
    fromDateKey: 'fromDate',
    toDateKey: 'toDate'
  };
}