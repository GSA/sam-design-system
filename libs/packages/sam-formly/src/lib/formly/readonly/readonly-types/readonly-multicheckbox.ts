import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-multicheckbox`,
  template: `
  <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

  <ng-template #definedValues>
    <span *ngFor="let option of multicheckboxOptions | formlySelectOptions | async">
      <span *ngIf="value[option.value]">
        <ng-container *ngIf="valueTemplate; else defaultValue" 
        [ngTemplateOutlet]="valueTemplate" 
        [ngTemplateOutletContext]="{$implicit: option.label}">
        </ng-container>
        <ng-template #defaultValue>
          <span class="text-bold display-block">{{option.label}}</span>
        </ng-template>
      </span>
    </span>
  </ng-template>
`,
})
export class ReadonlyMulticheckboxComponent implements OnInit {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() multicheckboxOptions: any[];

  ngOnInit() {
    if (!this.multicheckboxOptions || !this.multicheckboxOptions.length) {
      throw new Error(`No option list provided for readonly mode of multicheckbox type with value of ${this.value}`);
    }
  }
}
