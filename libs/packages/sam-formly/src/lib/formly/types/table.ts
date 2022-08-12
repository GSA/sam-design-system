import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

/**
 * Data model for table formly types' tableColumns template option
 */
export interface SdsTableColumn {
  /**
   * used as column header
   */
  label: string;

  /**
   * used internally to reference the column
   */
  columnName: string;

  /**
   * refers to which property of the data to render for the given column
   */
  property?: string;

  /**
   * refers to static text to render for the column
   */
  text?: string;

  /**
   * refers to a function that should return a string to render for the column.
   * The function takes in a single data element of the table
   */
  textFn?: (data: any) => string;

  /**
   * If the displayed value should be clickable, provide an onClick method
   */
  onClick?: (data: any, field: FormlyFieldConfig) => void;
}

@Component({
  selector: `sds-formly-field-table`,
  templateUrl: './table.html',
})
export class FormlyFieldTableComponent extends FieldType implements OnInit {
  // Referenced in html
  parentFieldConfig: FormlyFieldConfig;

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.to.tableColumns.map((column) => column.columnName);
    this.parentFieldConfig = this.field.parent;
  }
}
