import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SdsTreeTableComponent } from '@gsa-sam/components';
import { data } from '../services/TreeTableData';

@Component({
  selector: 'sds-tree-table-configurable',
  templateUrl: './tree-table-configurable.component.html',
})
export class TreeTableConfigurableComponent {
  @ViewChild(SdsTreeTableComponent) treeTable: SdsTreeTableComponent;

  @Input()
  childrenLimit: number;

  @Input()
  numChildrenToDisplay: number;

  @Input()
  displayColumns: string;

  @Output() viewAll = new EventEmitter<any>();

  @Output() rowExpanded = new EventEmitter<any>();

  displayedData: any[] = data;

  constructor() {}

  onViewAll(row) {
    this.viewAll.emit(row);
  }

  onRowToggled(row) {
    this.rowExpanded.emit(row);
  }

  expandAll() {
    this.treeTable.expandAll();
  }

  collapseAll() {
    this.treeTable.collapseAll();
  }
}
