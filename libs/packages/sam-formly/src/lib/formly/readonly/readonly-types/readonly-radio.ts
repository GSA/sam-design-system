import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-radio`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

    <ng-template #definedValues>
      <span *ngIf="!radioOptions || !radioOptions.length; else selectedOption" class="text-bold">
        {{isObject(value) ? (value | json) : value}}
      </span>
    </ng-template>

    <ng-template #selectedOption>
      <span *ngFor="let option of radioOptions | formlySelectOptions | async">
        <span *ngIf="option.value === value" class="text-bold">{{option.label}}</span>
      </span>
    </ng-template>
  `,
})
export class ReadonlyRadioComponent {

  @Input() label: string;
  @Input() value: any;
  @Input() radioOptions: any[];

  isObject(value) {
    return typeof(value) === 'object';
  }

}