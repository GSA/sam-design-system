import { Component, Input } from "@angular/core";


@Component({
  selector: `sds-readonly-checkbox`,
  template: `
      <label class="usa-label">{{label}}</label>
      <span class="text-bold">{{value ? 'Checked' : 'Unchecked'}}</span>
  `
})
export class ReadonlyCheckboxComponent {
  @Input() label: string;
  @Input() value: any;
}