import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-fileinfo`,
  template: `
      <label class="usa-label">{{label}}</label>
    <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

    <ng-template #definedValues>
      <span *ngIf="!fileInfoOptions || !fileInfoOptions.length; else selectedOption" class="text-bold">
        {{isObject(value) ? (value | json) : value}}
      </span>
    </ng-template>

    <ng-template #selectedOption>
      <span *ngFor="let option of fileInfoOptions | formlySelectOptions | async">
        <span *ngIf="option.value === value" class="text-bold">{{option.label}} - {{option.value}}</span>
      </span>
    </ng-template>
  `
})
export class ReadonlyFileinfoComponent {
  @Input() label: string;
  @Input() value: any;
  @Input() fileInfoOptions: any[];

  isObject(value) {
    return typeof(value) === 'object';
  }

}