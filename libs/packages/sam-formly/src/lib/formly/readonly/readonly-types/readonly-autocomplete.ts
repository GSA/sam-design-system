import { Component, Input, OnInit } from "@angular/core";
import { SDSAutocompletelConfiguration } from '@gsa-sam/components';

@Component({
  selector: `sds-readonly-autocomplete`,
  template: `    
    <label class="usa-label">
      <span
      *ngIf="to?.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span class="text-bold" [innerHTML]="displayValue"></span>
  `
})
export class ReadonlyAutocompleteComponent implements OnInit {

  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: any;
  @Input() autocompleteSettings: SDSAutocompletelConfiguration;

  displayValue: string;

  ngOnInit() {

    if(!this.autocompleteSettings || !this.autocompleteSettings.primaryTextField) {
      throw new Error(`Primary text field missing in autocomplete settings for ${this.label}`);
    }

    if (!this.value || !this.value.length) {
      this.displayValue = '&mdash;';
    } else {
      this.displayValue = this.value.map(value => value[this.autocompleteSettings.primaryTextField]).join(', ');
    }
  }
}
