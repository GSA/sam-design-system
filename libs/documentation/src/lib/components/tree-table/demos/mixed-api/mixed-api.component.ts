import { Component, OnInit } from "@angular/core";
import { SdsTreeTableData } from "libs/packages/components/src/lib/public-api";
import tableDataFull from "../../../table/demos/full/data";


@Component({
  selector: `tree-table-mixed-api`,
  templateUrl: './mixed-api.component.html'
})
export class TreeTableMixedApiComponent implements OnInit {

  columns = ['Name', 'Description'];

  // Data from backend
  apiData = {
    name: 'Data',
    description: 'This is the data user searched for',
    parent: [
      {
        name: 'parent 1',
        description: 'This is top level parent',
        hierarchyLevel: 1,
        totalImmediateChildren: 1
      },
      {
        name: 'parent 2',
        description: 'This is second level parent',
        hierarchyLevel: 2,
        totalImmediateChildren: 1,
      },
      {
        name: 'parent 3',
        description: 'This is third level parent',
        hierarchyLevel: 3,
        totalImmediateChildren: 1
      }
    ],
    hierarchyLevel: 4,
    totalImmediateChildren: 3,
    children: [
      {
        name: 'Child 1',
        hierarchyLevel: 5,
        totalImmediateChildren: 2
      },
      {
        name: 'Child 2',
        hierarchyLevel: 5,
        totalImmediateChildren: 0
      },
      {
        name: 'Child 3',
        hierarchyLevel: 5,
        totalImmediateChildren: 0
      }
    ]
  };

  treeTableData: SdsTreeTableData[];

  ngOnInit(): void {
    this.treeTableData = this.initialParseData(this.apiData);

    this.mapApiPropertyToTreeProperty(this.treeTableData);
  }


  /**
   * Sets up parents to recursive json model rather than a flat array.
   * @param data 
   * @returns 
   */
  private initialParseData(data: any) {
    const parentData = data.parent[0];
    let currData = parentData;

    for (let i = 0; i < data.parent.length; i++) {
      currData.chilldren = [data[i]];
      currData = currData.children[0];
    }

    currData.push(data);

    return [parentData]
  }

  /** Updates fields to match tree table data. In this case, we added totalChildren property, which is defined by totalImmediateChildren */
  private mapApiPropertyToTreeProperty(treeTableData: SdsTreeTableData[]) {
    treeTableData.forEach(item => {
      item.totalChildren = item.totalImmediateChildren;
      if (item.children) {
        this.mapApiPropertyToTreeProperty(item.children);
      }
    })
  }
}

