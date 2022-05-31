import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-fileinfo`,
  template: `
    <ng-container
      *ngIf="valueTemplate; else defaultValue"
      [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ $implicit: displayValue }"
    >
    </ng-container>
    <ng-template #defaultValue>
      <span class="text-bold">{{ displayValue }}</span>
    </ng-template>
  `,
})
export class ReadonlyFileinfoComponent implements OnInit, OnChanges {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() fileInfoOptions: any[];

  displayValue: string;

  ngOnInit() {
    if (!this.fileInfoOptions || !this.fileInfoOptions.length) {
      throw new Error(`No option list provided for readonly mode of fileinfo type with value of ${this.value}`);
    }
  }

  ngOnChanges() {
    if (!this.fileInfoOptions) {
      return;
    }

    const selectedOption = this.fileInfoOptions.find((option) => option.value === this.value);
    if (!selectedOption) {
      this.displayValue = '&mdash;';
    }
    this.displayValue = selectedOption.label + ' - ' + selectedOption.value;
  }
}
