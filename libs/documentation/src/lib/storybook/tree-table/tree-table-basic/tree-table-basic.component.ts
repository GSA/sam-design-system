import { Component, EventEmitter, Output } from '@angular/core';
import { data } from '../services/TreeTableData';

@Component({
  selector: 'sds-tree-table-basic',
  templateUrl: './tree-table-basic.component.html',
})
export class TreeTableBasicComponent {
  @Output() viewAll = new EventEmitter<any>();

  @Output() rowExpanded = new EventEmitter<any>();

  constructor() {}

  displayedData: any[] = data;

  displayColumns = ['Title', 'Description', 'Year'];

  onViewAll(row) {
    console.log('view all clicked', row);
    this.viewAll.emit(row);
  }

  onRowToggle(row) {
    console.log('row toggled', row);
    this.rowExpanded.emit(row);
  }
}
