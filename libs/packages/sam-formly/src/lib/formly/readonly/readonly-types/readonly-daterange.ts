import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-daterange`,
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: displayValue }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold">
        {{ displayValue }}
      </span>
    </ng-template>
  `,
})
export class ReadonlyDaterangeComponent implements OnInit {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() daterangepickerOptions = {
    fromDateKey: 'fromDate',
    toDateKey: 'toDate',
  };

  displayValue: string;
  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    let fromDate = this.datePipe.transform(this.value[this.daterangepickerOptions.fromDateKey], 'mediumDate');
    let toDate = this.datePipe.transform(this.value[this.daterangepickerOptions.toDateKey], 'mediumDate');
    this.displayValue = `${fromDate ? fromDate : '--'} ${toDate ? ' - ' + toDate : ''}`;
  }
}
