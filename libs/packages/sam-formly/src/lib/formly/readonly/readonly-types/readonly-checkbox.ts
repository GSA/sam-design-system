import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-checkbox`,
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: value }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold">{{ value ? 'Checked' : 'Unchecked' }}</span>
    </ng-template>
  `,
})
export class ReadonlyCheckboxComponent {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
}
