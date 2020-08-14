import { Component, Input, TemplateRef, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { SdsTableColumnSettings } from './models/table-column-settings.model';

@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class SdsTableComponent implements OnInit {

  /**
   * Data source for table
   */
  @Input() dataSource: any[];

  /**
   * columns to display in header
   * {@link SdsTableColumnSettings}
   */
  @Input() columns: SdsTableColumnSettings[];

  /**
   * template outlet for expandable detail
   * all properties for the selected row will be available for use in the template after set using let-{new property name}
   */
  @Input() detailRow?: TemplateRef<any>;

  /**
   * table without border
   */
  @Input() borderless?: boolean = false;

  /**
   * Include sticky header row
   */
  @Input() stickyHeader?: boolean = false;

  /**
   * sortable table
   */
  @Input() sort?: boolean = false;

  /**
   * sort vars
   */
  sortKey: string;
  sortDirection: string = 'asc';

  /**
   * currently expanded row
   */
  expandedRow: any | null;

  /**
   * column ids displayed
   */
  columnIds: string[] = [];

  constructor() {}

  ngOnInit() {
    this.columns.forEach(col => {
      this.columnIds.push(col.primaryKey);
    })
  }

  toggleRowExpansion(row: any) {
    this.expandedRow = this.expandedRow === row ? null : row;
  }

  adjustSort(col: string) {
    if (this.sortKey === col) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else {
        this.sortDirection = 'asc';
      }
      return this.dataSource = _.orderBy(this.dataSource, col, this.sortDirection);
    }

    this.sortKey = col;
    this.sortDirection = 'asc';
    this.dataSource = _.orderBy(this.dataSource, col, this.sortDirection);
  }
}
