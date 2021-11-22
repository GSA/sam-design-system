import { ChangeDetectionStrategy, ChangeDetectorRef, Component, 
  ContentChild, Directive, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef } from "@angular/core";
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
export class SdsTreeTableComponent {
  /** Rows of table tada to display */
  @Input() dataSource: SdsTreeTableData[];

  /** Column header text */
  @Input() displayColumns: string[];

  @ContentChild(SdsTreeTableRow) treetableRow: SdsTreeTableRow;

  /** Emitted for a row if there are more children to display and user clicked view all */
  @Output() viewAll = new EventEmitter<any>();

  /** Emitted anytime a row 's expansion / collapse value changes */
  @Output() rowExpanded = new EventEmitter<any>();

  _selectedRow: any;
  _selectedRowParent: any;

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}


  /**
   * Public Interface - close all opened children
   */
  public collapseAll() {
    this.toggleAllHelper(this.dataSource, false);
    this.cdr.detectChanges();
  }

  /**
   * Public interface - open all panels with children
   */
  public expandAll() {
    this.toggleAllHelper(this.dataSource, true);
    this.cdr.detectChanges();
  }

  /** 
   * Public interface - expand a single row given an ID. 
   * The row's predecessors will also be expanded 
   * @param rowId - id of row to expand
   */
  public expandRow(rowId: string) {
    this.expandRowHelper(this.dataSource, rowId);
    this.cdr.detectChanges();
  }

  /**
   * Public Interface - Collapse a single row given an id.
   * The row's successors will also be collapsed
   * @param rowId - id of row to collapse
   */
  public collapseRow(rowId: string) {
    const row = this.findRow(this.dataSource, rowId);
    if (!row) {
      return;
    }

    this.collapseRowHelper(row);
    this.cdr.detectChanges();
  }

  viewAllClicked(row: SdsTreeTableData, currentRow: HTMLTableRowElement, tableRow: HTMLTableRowElement) {
    
    currentRow.setAttribute('tabindex', undefined);
    tableRow.setAttribute('tabindex', '0');
    setTimeout(() => tableRow.focus());

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

  /** Sets height of vertical border on the tree table view */
  setHeight(row: HTMLTableRowElement, parentRow: HTMLTableRowElement, border: HTMLSpanElement) {
    if (!row || !parentRow) {
      return;
    }

    /** 
     * We run outside ngZone because we don't want the setTimeout to trigger change detection,
     * which would re-run changes on template, and re-evalute this function, causing infinite loop
     */
    this.ngZone.runOutsideAngular(() => {

      /** 
       * We do set timeout to let the table rows finish rendering. If a row was
       * expanded / collapsed, then the height of the vertical border will need to
       * be re-evaluated based on new distance from child to parent. We let the
       * view finish refreshing so that bounding rectangle is re-evaluated, and then
       * we can re-calculate height. Doing this synchronously without setTimeout
       * would give us incorrect value for height because the bouunding rectangle
       * has yet to update from the collapse / expand change
       */
      setTimeout(() => {
        const firstRect = parentRow.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
    
        const yFirstRect = firstRect.top + firstRect.height / 2;
        const yRowRect = rowRect.top + rowRect.height / 2;
    
        const height = yRowRect - yFirstRect - 20;
        border.style.height = `${height}px`;
      })
    })
  }

  getTemplateContext(parent: any, row: any, index: number, level: number, parentSelected?: boolean, parentRow?: HTMLTableRowElement) {
    const updatedLevel = level + 1;
    const posinset = index + 1;
    return {
      row: row,
      level: updatedLevel,
      index: posinset,
      size: parent.children ? parent.children.length : 1,
      rows: parent.children,
      parentSelected: parentSelected,
      parent: parent,
      parentRow: parentRow
    }
  }

  onRowClicked(row: SdsTreeTableData, tableRow: HTMLTableRowElement) {
    if (row.children) {
      row.expanded = !row.expanded;
    }

    this._selectedRow = row;
    this._selectedRowParent = this.getParentOfRow(this.dataSource, row);
    setTimeout(() => tableRow.focus());
    this.rowExpanded.emit(row);
  }

  onKeyDown($event: KeyboardEvent, tableRow: HTMLTableRowElement) {
    if ($event.target != tableRow) {
      return;
    }

    let siblingRow: HTMLTableRowElement;

    if ($event.key === 'ArrowUp') {
      siblingRow = ($event.target as HTMLTableRowElement).previousElementSibling as HTMLTableRowElement;
    } else if ($event.key === 'ArrowDown') {
      siblingRow = ($event.target as HTMLTableRowElement).nextElementSibling as HTMLTableRowElement;
    } else if ($event.key === 'Home') {
      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr');
    } else if ($event.key === 'End') {
      siblingRow = this.elementRef.nativeElement.querySelector('tbody tr:last-child');
    }

    if (!siblingRow) return;

    ($event.target as HTMLTableRowElement).setAttribute('tabindex', undefined);
    siblingRow.setAttribute('tabindex', '0');
    siblingRow.focus();
    $event.preventDefault();
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