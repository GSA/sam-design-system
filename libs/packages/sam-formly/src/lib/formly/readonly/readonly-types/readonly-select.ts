import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: `sds-readonly-select`,
  template: `
    <label class="usa-label">
      <span
      *ngIf="to.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span [innerHTML]="displayValue.label" class="text-bold"></span>
  `
})
export class ReadonlySelectComponent implements OnInit {
  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: any;
  @Input() selectOptions: any[];

  displayValue: {label: string, value: string};

  ngOnInit() {
    if (!this.selectOptions || !this.selectOptions.length) {
      throw new Error(`No option list provided for readonly mode of select type for ${this.label}`);
    }

    if (!this.value) {
      this.displayValue = {label: '&mdash;', value: this.value};
    } else {
      this.displayValue = this.selectOptions.find(option => option.value === this.value);

      if (!this.displayValue) {
        this.displayValue = {label: '&mdash;', value: this.value};
      }
    }
  }
}
