import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-input`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span class="text-bold">{{value ? value : '&mdash;'}}</span>
  `
})
export class ReadonlyInputComponent {
  @Input() label: string;
  @Input() value: any;

  constructor() {}
}