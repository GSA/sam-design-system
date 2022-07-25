import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: `sds-readonly-radio`,
  template: `
    <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

    <ng-template #definedValues>
      <span *ngFor="let option of radioOptions | formlySelectOptions | async">
        <span *ngIf="option.value === value">
          <ng-container
            *ngIf="valueTemplate; else defaultValue"
            [ngTemplateOutlet]="valueTemplate"
            [ngTemplateOutletContext]="{ $implicit: option.label }"
          >
          </ng-container>
          <ng-template #defaultValue>
            <span class="text-bold display-block">{{ option.label }}</span>
          </ng-template>
        </span>
      </span>
    </ng-template>
  `,
})
export class ReadonlyRadioComponent implements OnInit {
  @Input() value: any;
  @Input() valueTemplate: TemplateRef<any>;
  @Input() radioOptions: any[];

  ngOnInit() {
    if (!this.radioOptions || !this.radioOptions.length) {
      throw new Error(
        `No option list provided for readonly mode of radio type with value of ${this.value}`
      );
    }
  }
}
