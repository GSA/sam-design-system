import { Component, Input } from "@angular/core";


@Component({
  selector: `sds-tree-table`,
  templateUrl: `./tree-table.component.html`,
  styleUrls: ['./tree-table.component.scss'],
})
export class SdsTreeTableComponent {
  @Input() dataSource: any[];
  @Input() displayColumns: string[];


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

  private toggleAllHelper(data: any[], expanded: boolean) {
    data.forEach(data => {
      if (data.children) {
        this.toggleAllHelper(data.children, expanded);
        data.expanded = expanded;
      }
    });
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
}