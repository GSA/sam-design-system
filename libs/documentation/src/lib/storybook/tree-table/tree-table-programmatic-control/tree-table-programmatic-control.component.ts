import { Component, ViewChild } from '@angular/core';
import { SdsTreeTableComponent } from '@gsa-sam/components';
import { data } from '../services/TreeTableData';

@Component({
  selector: 'sds-tree-table-programmatic-control',
  templateUrl: './tree-table-programmatic-control.component.html',
})
export class TreeTableProgrammaticControlComponent {
  @ViewChild(SdsTreeTableComponent) treeTable: SdsTreeTableComponent;

  constructor() {}

  displayedData: any[] = data;

  displayColumns = ['Title', 'Description', 'Year'];

  expandAll() {
    this.treeTable.expandAll();
  }

  collapseAll() {
    this.treeTable.collapseAll();
  }

  expandChild() {
    this.treeTable.expandRow('row8');
  }

  collapseRow() {
    this.treeTable.collapseRow('row1');
  }
}
