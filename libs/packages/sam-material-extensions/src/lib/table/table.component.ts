import { Component, Input, TemplateRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class SdsTableComponent {

  /**
   * Data source for table
   */
  @Input() dataSource: any[];

  /**
   * columns to display in header
   */
  @Input() columns: string[];

  /**
   * template outlet for expandable detail
   * all properties for the selected row will be available for use in the template after set using let-{new property name}
   */
  @Input() detailRow?: TemplateRef<any>;

  @Input() borderless?: boolean = false;
  @Input() stickyHeader?: boolean = false;
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

  constructor() {}

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
