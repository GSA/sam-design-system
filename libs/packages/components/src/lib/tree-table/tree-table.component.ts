import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { SdsTreeTableData } from "./tree-table.model";

@Directive({
  selector: `[sdsTreeTableRow]`
})
export class SdsTreeTableRow {
  constructor(
    public templateRef: TemplateRef<any>
  ) {}
}

@Component({
  selector: `sds-tree-table`,
  templateUrl: `./tree-table.component.html`,
  styleUrls: ['./tree-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsTreeTableComponent  {
  @Input() dataSource: SdsTreeTableData[];
  @Input() displayColumns: string[];

  @ContentChild(SdsTreeTableRow) treetableRow: SdsTreeTableRow;

  @Output() viewAll = new EventEmitter<any>();
  @Output() rowExpanded = new EventEmitter<any>();

  _selectedRow: any;
  _selectedRowParent: any;

  constructor() {}

  /**
   * Public Interface - close all opened children
   */
  public collapseAll() {
    this.toggleAllHelper(this.dataSource, false)
  }

  /**
   * Public interface - open all panels with children
   */
  public expandAll() {
    this.toggleAllHelper(this.dataSource, true);
  }

  public expandRow(rowId: string) {
    this.expandRowHelper(this.dataSource, rowId);
  }

  public collapseRow(rowId: string) {
    const row = this.findRow(this.dataSource, rowId);
    if (!row) {
      return;
    }

    this.collapseRowHelper(row);
  }

  viewAllClicked(row: any) {
    this.viewAll.emit(row);
  }

  private toggleAllHelper(data: any[], expanded: boolean) {
    data.forEach(data => {
      if (data.children) {
        this.toggleAllHelper(data.children, expanded);
        data.expanded = expanded;
      }
    });
  }

  private expandRowHelper(allRows: any[], id: string) {
    for (let i = 0; i < allRows.length; i++) {
      const row = allRows[i];
      if (row.id === id) {
        return true;
      } else if (row.children) {
        const isChildExpanded = this.expandRowHelper(row.children, id);
        if (isChildExpanded) {
          row.expanded = true;
          return true;
        }
      }
    }

    return false;
  }

  private findRow(allRows: any[], id: string) {
    for (let i = 0; i < allRows.length; i++) {
      const row = allRows[i];
      if (row.id === id) {
        return row;
      } else if (row.children) {
        return this.findRow(allRows, id);
      }
    }
    return null;
  }

  private collapseRowHelper(row: any) {
    row.expanded = false;
    if (row.children) {
      row.children.forEach(child => this.collapseRowHelper(child));
    }
  }

  getTemplateContext(parent: any, row: any, index: number, level: number, parentSelected?: boolean) {
    const updatedLevel = level + 1;
    const posinset = index + 1;
    return {
      row: row,
      level: updatedLevel,
      index: posinset,
      size: parent.children ? parent.children.length : 1,
      rows: parent.children,
      parentSelected: parentSelected
    }
  }

  onRowClicked(row: any) {
    if (row.children) {
      row.expanded = !row.expanded;
    }

    this._selectedRow = row;
    this._selectedRowParent = this.getParentOfRow(this.dataSource, row);
    this.rowExpanded.emit(row);
  }

  getParentOfRow(allRows: any[], row: any) {
    let retRow = null;
    for (let i = 0; i < allRows.length; i++) {
      if (allRows[i] === row) {
        retRow = allRows[i];
        break;
      } else if(allRows[i].children) {
        const isChildRow = this.getParentOfRow(allRows[i].children, row);
        if (isChildRow) {
          retRow = allRows[i];
        }
      }
    }
    
    return retRow;
  }
}