import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { SdsTreeTableComponent, SdsTreeTableData } from "libs/packages/components/src/lib/public-api";
import tableDataFull from "../../../table/demos/full/data";


@Component({
  selector: `tree-table-mixed-api`,
  templateUrl: './mixed-api.component.html'
})
export class TreeTableMixedApiComponent implements OnInit, AfterViewInit {
  @ViewChild(SdsTreeTableComponent) treeTable: SdsTreeTableComponent;

  columns = ['Name', 'Description'];

  // Data from backend - Made search on uuid #45
  apiData = {
    name: 'Data',
    description: 'This is the data user searched for',
    parent: [
      {
        name: 'parent 1',
        description: 'This is top level parent',
        hierarchyLevel: 1,
        totalImmediateChildren: 1,
        uuid: 38,
      },
      {
        name: 'parent 2',
        description: 'This is second level parent',
        hierarchyLevel: 2,
        totalImmediateChildren: 1,
        uuid: 40,
      },
      {
        name: 'parent 3',
        description: 'This is third level parent',
        hierarchyLevel: 3,
        totalImmediateChildren: 1,
        uuid: 42,
      }
    ],
    uuid: 45,
    hierarchyLevel: 4,
    totalImmediateChildren: 3,
    children: [
      {
        name: 'Child 1',
        hierarchyLevel: 5,
        uuid: 50,
        totalImmediateChildren: 2
      },
      {
        name: 'Child 2',
        hierarchyLevel: 5,
        uuid: 52,
        totalImmediateChildren: 0
      },
      {
        name: 'Child 3',
        uuid: 53,
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

  ngAfterViewInit() {
    // After view has been initialized, I'd like to auto expand the tree to the uuid user searched for
    // I know I had done api search on uuid number 45
    this.treeTable.expandRow('45');
  }

  onViewAll($event) {
    console.log($event);
  }

  onRowExpansion($event) {
    console.log($event);
    if ($event.totalChildren > 0 && !$event.children) {
      // Mock Api call
      setTimeout(() => {
        // Assume this is api response after querying for expanded heirarchy
        const responseData = {
            parent: [], 
            children: [
              {name:'Grand Child 1', description: 'Loaded GrandChild', totalImmediateChildren: 2}, 
              {name: 'GrandChild2', description: 'Loaded Grandchild', totalImmediateChildren: 0},
          ]
        }

        this.mapApiPropertyToTreeProperty(responseData.children);
        
        $event.children = responseData.children;
        this.treeTable.cdr.detectChanges();
      })
    }
  }

  /**
   * Sets up parents to recursive json model rather than a flat array.
   * @param data 
   * @returns 
   */
  private initialParseData(data: any) {
    const parentData = data.parent[0];
    let currData = parentData;

    for (let i = 1; i < data.parent.length; i++) {
      currData.children = [data.parent[i]];
      currData = currData.children[0];
    }

    currData.children = [data];

    return [parentData]
  }

  /** Updates fields to match tree table data. In this case, we added totalChildren property, which is defined by totalImmediateChildren */
  private mapApiPropertyToTreeProperty(treeTableData: any[]) {
    treeTableData.forEach(item => {
      item.totalChildren = item.totalImmediateChildren; // map totalChildren as totalImmediateChildren
      item.id = `${item.uuid}`; // Map id as uuid
      if (item.children) {
        this.mapApiPropertyToTreeProperty(item.children);
      }
    })
  }
}
