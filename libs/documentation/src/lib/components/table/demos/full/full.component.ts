import { Component } from '@angular/core';
import tableDataFull from './data';

@Component({
  templateUrl: './full.component.html',
  styleUrls: [ './full.component.scss' ]
})

export class TableFullComponent {

  constructor() {
    this.sliceData(0,10);
  }

  rowEdit: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date', 'tags', 'actions'];

  data: any;

  sliceData(start, end) {
    this.data = tableDataFull.slice(start,end);
  }

  getTotalRequests() {
    return this.data.map(t => t.requests).reduce((acc, value) => acc + value, 0);
  }

  edit(element) {
    console.log(element, "Called actions with element: ");
    this.rowEdit = element;
  }
}
