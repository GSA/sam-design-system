import { DatePipe } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sds-readonly-datepicker',
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: value }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold"> {{ value ? (value | date: 'mediumDate') : '&mdash;' }}</span>
    </ng-template>
  `,
})
export class ReadonlyDatepickerComponent {
  @Input() value: Date;
  @Input() valueTemplate: TemplateRef<any>;
}
