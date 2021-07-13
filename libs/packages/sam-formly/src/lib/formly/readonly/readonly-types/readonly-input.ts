import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-input`,
  template: `
    <label class="usa-label">
      <span
      *ngIf="to?.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span class="text-bold">{{value ? value : '&mdash;'}}</span>
  `
})
export class ReadonlyInputComponent {
  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: any;

  constructor() {}
}