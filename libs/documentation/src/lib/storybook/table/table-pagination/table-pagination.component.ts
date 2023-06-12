import { Component } from '@angular/core';
import tableDataFull from './data';

@Component({
  selector: 'sds-table-pagination',
  templateUrl: './table-pagination.component.html'
})
export class TablePaginationComponent{
  data = tableDataFull;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date'];
}
