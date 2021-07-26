import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: `sds-readonly-input`,
  template: `
    <ng-container *ngIf="valueTemplate; else defaultValue" 
    [ngTemplateOutlet]="valueTemplate" 
    [ngTemplateOutletContext]="{$implicit: value}">
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold">{{value ? value : '&mdash;'}}</span>
    </ng-template>
  `
})
export class ReadonlyInputComponent {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
}