import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { SDSAutocompletelConfiguration } from '@gsa-sam/components';

@Component({
  selector: `sds-readonly-autocomplete`,
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: displayValue }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold" [innerHTML]="displayValue"></span>
    </ng-template>
  `,
})
export class ReadonlyAutocompleteComponent implements OnInit {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() autocompleteSettings: SDSAutocompletelConfiguration;

  displayValue: string;

  ngOnInit() {
    if (
      !this.autocompleteSettings ||
      !this.autocompleteSettings.primaryTextField
    ) {
      throw new Error(
        `Primary text field missing in autocomplete settings with value of ${this.value}`
      );
    }

    if (!this.value || !this.value.length) {
      this.displayValue = '&mdash;';
    } else {
      this.displayValue = this.value
        .map((value) => value[this.autocompleteSettings.primaryTextField])
        .join(', ');
    }
  }
}
