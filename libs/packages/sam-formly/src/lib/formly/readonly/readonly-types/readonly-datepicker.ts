import { DatePipe } from '@angular/common';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'sds-readonly-datepicker',
  template: `
    <label class="usa-label">
      <span
      *ngIf="to?.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span class="text-bold"> {{value ? (value | date: 'mediumDate') : '&mdash;'}}</span>
  `,
})
export class ReadonlyDatepickerComponent {
  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: Date;
}
