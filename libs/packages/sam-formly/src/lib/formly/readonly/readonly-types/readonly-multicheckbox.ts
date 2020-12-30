import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: `sds-readonly-multicheckbox`,
  template: `
  <label class="usa-label">{{label}}</label>
  <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

  <ng-template #definedValues>
    <span *ngFor="let option of multicheckboxOptions | formlySelectOptions | async">
      <span *ngIf="value[option.value]" class="text-bold display-block">{{option.label}}</span>
    </span>
  </ng-template>`,
})
export class ReadonlyMulticheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() value: any;
  @Input() multicheckboxOptions: any[];

  ngOnInit() {
    if (!this.multicheckboxOptions || !this.multicheckboxOptions.length) {
      throw new Error(`No option list provided for readonly mode of multicheckbox type for ${this.label}`);
    }
  }
}
