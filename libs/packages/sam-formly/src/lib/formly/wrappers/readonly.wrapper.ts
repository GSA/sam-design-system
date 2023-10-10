import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { SdsFormlyTypes } from '../models/formly-types';
/**
 * @param string [props.required] Makes the field required
 */
@Component({
  template: `
    <div
      *ngIf="field.type === sdsFormlyTypes.READONLY || props.readonlyMode; else passThrough"
      [ngClass]="props.readonlyClass"
    >
      <span *ngIf="props.readonlyTemplate; else defaultTemplate" [innerHTML]="props.readonlyTemplate(field)"></span>
      <ng-template #defaultTemplate>
        <sds-readonly-container [formlyFieldConfig]="field"></sds-readonly-container>
      </ng-template>
    </div>
    <ng-template #passThrough>
      <ng-container #fieldComponent></ng-container>
    </ng-template>
  `,
})
export class FormlyReadonlyWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;

  sdsFormlyTypes = SdsFormlyTypes;
}
