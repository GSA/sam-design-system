import { Component, Input, OnInit } from "@angular/core";
import { SDSAutocompletelConfiguration } from '@gsa-sam/components';

@Component({
  selector: `sds-readonly-autocomplete`,
  template: `    
    <label class="usa-label">{{label}}</label>
    <span class="text-bold" [innerHTML]="displayValue"></span>
  `
})
export class ReadonlyAutocompleteComponent implements OnInit {

  @Input() label: string;
  @Input() value: any;
  @Input() autocompleteSettings: SDSAutocompletelConfiguration;

  displayValue: string;

  ngOnInit() {
    if (!this.value || !this.value.length) {
      this.displayValue = '&mdash;';
    } else if (!this.autocompleteSettings || !this.autocompleteSettings.primaryTextField) {
      this.displayValue = this.isObject(this.value) ? JSON.stringify(this.value) : this.value;
    } else {
      this.displayValue = this.value.map(value => value[this.autocompleteSettings.primaryTextField]).join(', ');
    }
  }

  isObject(value) {
    return typeof(value) === 'object';
  }
}