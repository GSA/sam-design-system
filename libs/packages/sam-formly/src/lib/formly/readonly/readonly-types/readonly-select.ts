import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: `sds-readonly-select`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span [innerHTML]="displayValue.label" class="text-bold"></span>
  `
})
export class ReadonlySelectComponent implements OnInit {
  
  @Input() label: string;
  @Input() value: any;
  @Input() selectOptions: any[];

  displayValue: {label: string, value: string};

  ngOnInit() {
    if (!this.value) {
      this.displayValue = {label: '&mdash;', value: this.value};
    } else if (!this.selectOptions || !this.selectOptions.length) {
      this.displayValue = this.value;
    } else {
      this.displayValue = this.selectOptions.find(option => option.value === this.value);

      if (!this.displayValue) {
        this.displayValue = {label: '&mdash;', value: this.value};
      }
    }
  }
}
