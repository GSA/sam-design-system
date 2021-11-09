import { Component, ViewChild } from "@angular/core";
import { TableDataSource } from "@gsa-sam/ngx-uswds";
import { SdsTreeTableComponent } from "libs/packages/components/src/lib/public-api";


@Component({
  selector: `tree-table-basic`,
  templateUrl: `./tree-table-basic.component.html`
})
export class TreeTableBasicComponent {
  @ViewChild(SdsTreeTableComponent) treeTable: SdsTreeTableComponent;

  tableColumns = ['title', 'description', 'year'];

  displayedData: any[] = [
    {
      description: 'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      title: 'Declaration of Independence',
      year: 1776,
      children: [
        {
          title: 'Bill of Rights',
          description: 'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791
        },
        {
          title: 'Declaration of Sentiments',
          description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
          year: 1848,
          totalChildren: 42,
          children: [
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
          ]
        },
        {
          title: 'Emancipation Proclamation',
          description: 'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          children: [
            {
              title: 'Declaration of Sentiments',
              description: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848
            },
          ]
        },
      ]
    },
  ];

  expandAll() {
    this.treeTable.expandAll();
  }

  collapseAll() {
    this.treeTable.collapseAll();
  }
}