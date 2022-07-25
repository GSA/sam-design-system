import { Component, ViewChild } from '@angular/core';
import { TableDataSource } from '@gsa-sam/ngx-uswds';
import { SdsTreeTableComponent } from 'libs/packages/components/src/lib/public-api';

@Component({
  selector: `tree-table-basic`,
  templateUrl: `./tree-table-basic.component.html`,
})
export class TreeTableBasicComponent {
  @ViewChild(SdsTreeTableComponent) treeTable: SdsTreeTableComponent;

  tableColumns = ['Title', 'Description', 'Year'];

  displayedData: any[] = [
    {
      description:
        'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      title: 'Declaration of Independence',
      year: 1776,
      id: 'row1',
      children: [
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Declaration of Sentiments',
          description:
            'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
          year: 1848,
          id: 'row3',
          totalChildren: 42,
          children: [
            {
              title: 'Declaration of Sentiments',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row4',
            },
            {
              title: 'Declaration of Sentiments',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row5',
            },
            {
              title: 'Declaration of Sentiments',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row6',
            },
            {
              title: 'Declaration of Sentiments',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row7',
            },
            {
              title: 'Declaration of Sentiments2',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row8',
            },
          ],
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
          children: [
            {
              title: 'Bill of Rights',
              description:
                'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
              year: 1791,
              id: 'row2',
            },
            {
              title: 'Declaration of Sentiments',
              description:
                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
              year: 1848,
              id: 'row10',
              children: [
                {
                  title: 'Bill of Rights',
                  description:
                    'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                  year: 1791,
                  id: 'row2',
                },
                {
                  title: 'Emancipation Proclamation',
                  description:
                    'An executive order granting freedom to slaves in designated southern states.',
                  year: 1863,
                  id: 'row9',
                  children: [
                    {
                      title: 'Bill of Rights',
                      description:
                        'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                      year: 1791,
                      id: 'row2',
                    },
                    {
                      title: 'Declaration of Sentiments',
                      description:
                        'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
                      year: 1848,
                      id: 'row10',
                      children: [
                        {
                          title: 'Bill of Rights',
                          description:
                            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                          year: 1791,
                          id: 'row2',
                        },
                        {
                          title: 'Emancipation Proclamation',
                          description:
                            'An executive order granting freedom to slaves in designated southern states.',
                          year: 1863,
                          id: 'row9',
                          children: [
                            {
                              title: 'Bill of Rights',
                              description:
                                'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                              year: 1791,
                              id: 'row2',
                            },
                            {
                              title: 'Declaration of Sentiments',
                              description:
                                'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
                              year: 1848,
                              id: 'row10',
                            },
                          ],
                        },
                        {
                          title: 'Bill of Rights',
                          description:
                            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                          year: 1791,
                          id: 'row2',
                        },
                      ],
                    },
                    {
                      title: 'Bill of Rights',
                      description:
                        'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                      year: 1791,
                      id: 'row2',
                    },
                  ],
                },
                {
                  title: 'Bill of Rights',
                  description:
                    'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
                  year: 1791,
                  id: 'row2',
                },
              ],
            },
            {
              title: 'Bill of Rights',
              description:
                'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
              year: 1791,
              id: 'row2',
            },
          ],
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
      ],
    },
    {
      description:
        'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      title: 'Declaration of Independence',
      year: 1776,
      id: 'row1',
      children: [
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
      ],
    },
    {
      description:
        'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      title: 'Declaration of Independence',
      year: 1776,
      id: 'row1',
      children: [
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
        {
          title: 'Bill of Rights',
          description:
            'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
          year: 1791,
          id: 'row2',
        },
        {
          title: 'Emancipation Proclamation',
          description:
            'An executive order granting freedom to slaves in designated southern states.',
          year: 1863,
          id: 'row9',
        },
      ],
    },
  ];

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

  onViewAll($event) {
    const billOfRights = this.displayedData[0].children[0];

    const childrenLength = $event.children.length;
    const totalChildren = $event.totalChildren;
    const childrenToAdd = totalChildren - childrenLength;

    const additions = [];

    for (let i = 0; i < childrenToAdd; i++) {
      additions.push({ ...billOfRights });
    }

    $event.children = [...$event.children, ...additions];
  }
}
