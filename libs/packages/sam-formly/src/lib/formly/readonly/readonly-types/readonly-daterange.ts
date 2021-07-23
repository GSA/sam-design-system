import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: `sds-readonly-daterange`,
  template: `
    <ng-container *ngIf="valueTemplate; else defaultValue" 
    [ngTemplateOutlet]="valueTemplate" 
    [ngTemplateOutletContext]="{$implicit: value}">
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold"> 
        {{value[daterangepickerOptions.fromDateKey] | date: 'mediumDate'}} - 
        {{value[daterangepickerOptions.toDateKey] | date: 'mediumDate'}}
      </span>
    </ng-template>
  `
})
export class ReadonlyDaterangeComponent {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() daterangepickerOptions = {
    fromDateKey: 'fromDate',
    toDateKey: 'toDate'
  };
}