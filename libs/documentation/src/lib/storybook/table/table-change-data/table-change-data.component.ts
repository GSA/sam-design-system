import { Component } from '@angular/core';

@Component({
  selector: 'sds-table-change-data',
  templateUrl: './table-change-data.component.html'
})
export class TableChangeDataComponent {

  rowEdit: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date'];

  partialData = [
    {
      id: 1,
      firstName: 'Gregorius',
      lastName: 'Matthews',
      email: 'gmews0@sfly.com',
      gender: 'Male',
      catchPhrase: 'Reduced needs-based initiative',
      jobTitle: 'Software Test Engineer IV',
      requests: 1,
      date: '2020-07-23',
      tags: [{ className: 'text-info-dark', label: 'Normal' }],
    },
    {
      id: 2,
      firstName: 'Letti',
      lastName: 'Gleadhell',
      email: 'lgll1@usda.gov',
      gender: 'Female',
      catchPhrase: 'Upgradable homogeneous productivity',
      jobTitle: 'GIS Technical Architect',
      requests: 3,
      date: '2020-04-11',
      tags: [
        { className: 'text-error', label: 'Expired' },
        { className: 'text-warning-darker', label: 'Inactive' },
      ],
    },
    {
      id: 3,
      firstName: 'Vassili',
      lastName: 'McGuckin',
      email: 'vmcin2@phoca.cz',
      gender: 'Male',
      catchPhrase: 'Team-oriented optimizing complexity',
      jobTitle: 'Media Manager IV',
      requests: 0,
      date: '2020-04-22',
      tags: [{ className: 'text-info', label: 'Draft' }],
    },
    {
      id: 4,
      firstName: 'Oren',
      lastName: 'Downey',
      email: 'odney3@blogs.com',
      gender: 'Male',
      catchPhrase: 'Synergized 3rd generation projection',
      jobTitle: 'Account Coordinator',
      requests: 2,
      date: '2019-11-02',
      tags: [{ className: 'text-success', label: 'Active' }],
    },
    {
      id: 5,
      firstName: 'Claribel',
      lastName: 'Donne',
      email: 'cdonne4@nasa.gov',
      gender: 'Female',
      catchPhrase: 'Organized local challenge',
      jobTitle: 'Financial Analyst',
      requests: 6,
      date: '2020-04-15',
      tags: [{ className: 'text-default', label: 'Default' }],
    },
  ];

  fullData: any;
  tableData: any;

  constructor(){
    this.fullData = this.expandData();
    this.sliceData(0,5);
  }

  expandData(){
    return [
      ...this.updateIds(this.partialData, 0),
      ...this.updateIds(this.partialData, 5),
      ...this.updateIds(this.partialData, 10),
      ...this.updateIds(this.partialData, 15),
      ...this.updateIds(this.partialData, 20),
      ...this.updateIds(this.partialData, 25),
      ...this.updateIds(this.partialData, 30),
      ...this.updateIds(this.partialData, 35),
      ...this.updateIds(this.partialData, 40),
      ...this.updateIds(this.partialData, 45),
      ...this.updateIds(this.partialData, 50),
    ]
  }

  updateIds(partialData: Array<any>, startingID: number){
    const partialDataCopy = JSON.parse(JSON.stringify(partialData));
    const updatedData = partialDataCopy.map((element, index) => {
      element.id = startingID + index;
      return element;
    });
    return updatedData;
  }

  edit(element) {
    console.log(element, 'Called actions with element: ');
    this.rowEdit = element;
  }

  sliceData(start, end) {
    this.tableData = this.fullData.slice(start, end);
  }

}
