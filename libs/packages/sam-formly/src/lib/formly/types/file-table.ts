import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { Subscription } from "rxjs";

@Component({
  selector: `sds-formly-field-file-table`,
  template: `
    <sds-table [data]="datasource" [tableName]="'basicTable'" #fileTable>
      <sds-table-column sdsColumnName="name">
        <ng-template #sdsHeaderCell>Attachment Name</ng-template>
        <ng-template #sdsCell let-element="element">{{ element?.name }}</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="size">
        <ng-template #sdsHeaderCell>File Size</ng-template>
        <ng-template #sdsCell let-element="element">{{ element?.size }}</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="scan">
        <ng-template #sdsHeaderCell>Virus Scan</ng-template>
        <ng-template #sdsCell let-element="element">{{ element?.scanResult }}</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="action">
        <ng-template #sdsHeaderCell>Actions</ng-template>
        <ng-template #sdsCell let-element="element">
          <button class="usa-button usa-button--base" (click)="removeFile(element)">Remove</button>
        </ng-template>
      </sds-table-column>
      
      <sds-header-row [displayedColumns]="displayedColumns"></sds-header-row>
      <sds-row [displayedColumns]="displayedColumns"></sds-row>
    </sds-table>
    <div *ngIf="!datasource || !datasource.length" class="border border-base-light text-center padding-1">No Attachments</div>
  `
})
export class FormlyFieldFileTableComponent extends FieldType implements AfterViewInit, OnDestroy {

  parentFieldConfig: FormlyFieldConfig;

  datasource: [];

  subscription = new Subscription();

  displayedColumns: string[] = ['name', 'size', 'scan', 'action'];

  ngAfterViewInit() {
    // this.parentFieldConfig = this.field.parent;
    // console.log(this.parentFieldConfig);
    const inputValueSubscription = this.form.valueChanges.subscribe(change => {
      console.log('changeeeeeeeeeeeeeeeed', change);
      this.datasource = change;
    });
    this.subscription.add(inputValueSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}