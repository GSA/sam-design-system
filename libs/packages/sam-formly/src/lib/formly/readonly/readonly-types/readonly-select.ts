import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-select`,
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: displayValue.label }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span [innerHTML]="displayValue.label" class="text-bold"></span>
    </ng-template>
  `,
})
export class ReadonlySelectComponent implements OnInit {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() selectOptions: any[];

  displayValue: { label: string; value: string };

  ngOnInit() {
    if (!this.selectOptions || !this.selectOptions.length) {
      throw new Error(
        `No option list provided for readonly mode of select type with value of ${this.value}`
      );
    }

    if (!this.value) {
      this.displayValue = { label: '&mdash;', value: this.value };
    } else {
      this.displayValue = this.selectOptions.find(
        (option) => option.value === this.value
      );

      if (!this.displayValue) {
        this.displayValue = { label: '&mdash;', value: this.value };
      }
    }
  }
}
