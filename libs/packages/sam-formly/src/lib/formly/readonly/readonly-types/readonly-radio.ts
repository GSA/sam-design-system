import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: `sds-readonly-radio`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

    <ng-template #definedValues>
    <span *ngFor="let option of radioOptions | formlySelectOptions | async">
        <span *ngIf="option.value === value" class="text-bold">{{option.label}}</span>
      </span>
    </ng-template>
  `,
})
export class ReadonlyRadioComponent implements OnInit {

  @Input() label: string;
  @Input() value: any;
  @Input() radioOptions: any[];

  ngOnInit() {
    if (!this.radioOptions || !this.radioOptions.length) {
      throw new Error(`No option list provided for readonly mode of radio type for ${this.label}`);
    }
  }
}
