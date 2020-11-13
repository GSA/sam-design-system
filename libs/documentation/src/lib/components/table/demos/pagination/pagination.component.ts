import { Component } from '@angular/core';
import tableDataFull from '../data';

@Component({
  templateUrl: './pagination.component.html'
})

export class TablePaginationComponent {

  constructor() {
    this.sliceData(0,200);
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date'];

  data: any;

  sliceData(start, end) {
    this.data = tableDataFull.slice(start,end);
  }

}
