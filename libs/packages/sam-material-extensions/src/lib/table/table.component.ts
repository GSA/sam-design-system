import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SdsTableComponent {
  @Input() dataSource: any[];
  @Input() columns: string[];
  @Input() borderless?: boolean = false;
  @Input() stickyHeader?: boolean = false;
  @Input() sort?: boolean = false;
  @Input() detailRow?: string;
  @Input() expandableRows?: boolean = false;

  // sort vars
  sortKey: string;
  sortDirection: string = 'asc';

  // expanded row vars
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
