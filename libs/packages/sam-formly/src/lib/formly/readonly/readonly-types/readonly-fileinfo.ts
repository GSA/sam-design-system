import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: `sds-readonly-fileinfo`,
  template: `
    <label class="usa-label">
      <span
      *ngIf="to.tagText"
      class="usa-tag"
      [ngClass]="to.tagClass ? to.tagClass : 'sds-tag--info-white'"
      >{{ to.tagText }}</span>
      {{label ? label : to.label}}
    </label>
    <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

    <ng-template #definedValues>
      <span *ngFor="let option of fileInfoOptions | formlySelectOptions | async">
        <span *ngIf="option.value === value" class="text-bold">{{option.label}} - {{option.value}}</span>
      </span>
    </ng-template>
  `
})
export class ReadonlyFileinfoComponent implements OnInit {
  @Input() to: any = {}; // template options
  @Input() label: string;
  @Input() value: any;
  @Input() fileInfoOptions: any[];

  ngOnInit() {
    if (!this.fileInfoOptions || !this.fileInfoOptions.length) {
      throw new Error(`No option list provided for readonly mode of fileinfo type for ${this.label}`);
    }
  }
}
