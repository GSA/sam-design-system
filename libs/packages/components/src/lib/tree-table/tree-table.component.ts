import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: `sds-tree-table`,
  templateUrl: `./tree-table.component.html`,
  styleUrls: ['./tree-table.component.scss'],
})
export class SdsTreeTableComponent {
  @Input() dataSource: any[];
  @Input() displayColumns: string[];


  @Output() viewAll = new EventEmitter<any>();

  _selectedRow: any;

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}


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
    this.cdr.detectChanges();

    const tableRow: HTMLTableRowElement = this.elementRef.nativeElement.querySelector(`#${rowId}`);
    tableRow.scrollIntoView({behavior: 'smooth', block: 'center'});
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
        if (this._selectedRow) this._selectedRow.selected = false;
        this._selectedRow = row;
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

  getTemplateContext(parent: any, row: any, index: number, level: number) {
    const updatedLevel = level + 1;
    const posinset = index + 1;
    return {
      row: row,
      level: updatedLevel,
      index: posinset,
      size: parent.children ? parent.children.length : 1,
    }
  }

  onRowClicked(row: any) {
    row.selected = true;
    if (row.children) {
      row.expanded = !row.expanded;
    }

    this._selectedRow = row;
  }
}