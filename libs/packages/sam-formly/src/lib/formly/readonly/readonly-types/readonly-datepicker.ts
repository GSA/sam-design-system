import { DatePipe } from '@angular/common';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'sds-readonly-datepicker',
  template: `
    <label class="usa-label">{{label}}</label>
    <span class="text-bold"> {{value ? (value | date: 'mediumDate') : '&mdash;'}}</span>
  `,
})
export class ReadonlyDatepickerComponent {

  @Input() label: string;
  @Input() value: Date;
}
