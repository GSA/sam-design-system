import { ChangeDetectorRef, Component, ViewChild, OnInit } from "@angular/core";
import { AbstractSdsFormly } from "../sds-formly";
import { UsaFileInputComponent } from '@gsa-sam/ngx-uswds';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: `sds-formly-field-file-input`,
  template: `
    <usa-file-input #fileInput
      [formControl]="formControl"
      [id]="id">
    </usa-file-input>

    <ng-container *ngIf="field.fieldArray">
      <div class="margin-top-2"></div>
      <sds-table [data]="formControl.value" [tableName]="field.fieldArray.templateOptions.name" #fileTable>
        <sds-table-column *ngFor="let column of field.fieldArray.templateOptions.tableColumns" [sdsColumnName]="column.columnName">
          <ng-template #sdsHeaderCell>{{column.label}}</ng-template>
          <ng-template #sdsCell let-element="element">
            <button class="usa-button usa-button--unstyled text-secondary-dark" *ngIf="column.onClick; else noClick"
              (click)="column.onClick(element, parentFieldConfig)">
              <ng-container [ngTemplateOutlet]="tableCellTemplates"
                [ngTemplateOutletContext]="{$implicit: element, column: column}"></ng-container>
            </button>
            <ng-template #noClick>
              <ng-container [ngTemplateOutlet]="tableCellTemplates"
                [ngTemplateOutletContext]="{$implicit: element, column: column}"></ng-container>
            </ng-template>
          </ng-template>
        </sds-table-column>
        <sds-header-row [displayedColumns]="displayedColumns"></sds-header-row>
        <sds-row [displayedColumns]="displayedColumns"></sds-row>
      </sds-table>
      <div *ngIf="!formControl.value || !formControl.value.length" class="border border-base-light text-center padding-1">{{field.fieldArray.templateOptions.noDataText}}</div>

      <ng-template #tableCellTemplates let-element let-column="column">
        <span *ngIf="column.property">{{element[column.property]}}</span>
        <span *ngIf="column.text">{{column.text}}</span>
        <span *ngIf="column.textFn">{{column.textFn(element)}}</span>
      </ng-template>

    </ng-container>

  `
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly implements OnInit{
  @ViewChild(UsaFileInputComponent, { static: true }) public template: UsaFileInputComponent;

  parentFieldConfig: FormlyFieldConfig;

  displayedColumns: string[] = [];

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;

  }

  ngOnInit() {
    super.ngOnInit();

    if(this.field && this.field.fieldArray){
      this.displayedColumns = this.field.fieldArray.templateOptions.tableColumns.map(column => column.columnName);
      this.parentFieldConfig = this.field.parent;
    }
  }
}
