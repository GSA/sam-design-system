import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  template: `
  <ng-container [ngSwitch]="to.group">
    <ng-container *ngSwitchCase="'accordion'">
      <sds-accordion multi="true" displayMode="basic">
        <sds-accordion-item class="sds-accordion__panel">
          <sds-accordion-item-header> <span *ngIf="!to.hideLabel" [attr.aria-hidden]="!to.announceLabel ? undefined : 'true'"> {{to.label}} </span> </sds-accordion-item-header>
          <ng-container #fieldComponent></ng-container>
        </sds-accordion-item>
      </sds-accordion>
    </ng-container>
    <ng-container *ngSwitchCase="'panel'">
      <div class="sds-panel" [ngClass]="{'sds-panel--multiple' : field?.fieldGroup?.length }">
        <div class="sds-panel__header" *ngIf="!to.hideLabel" [attr.aria-hidden]="!to.announceLabel ? undefined : 'true'"> {{to.label}} </div>
        <div class="sds-panel__body">
          <ng-container #fieldComponent></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-container *ngSwitchDefault>
      <ng-container #fieldComponent></ng-container>
    </ng-container>
  </ng-container>
  `,
})
export class FormlyGroupWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
