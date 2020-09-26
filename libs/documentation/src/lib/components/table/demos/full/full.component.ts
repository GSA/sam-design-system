import { Component } from '@angular/core';

@Component({
  templateUrl: './full.component.html'
})

export class TableFullComponent {

  rowEdit: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date', 'tags', 'actions'];

  data = [
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
      tags: [
        { className: "text-info-dark", label: "Normal" }
      ]
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
        { className: "text-error", label: "Expired" },
        { className: "text-warning-darker", label: "Inactive" }
      ]
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
      tags: [
        { className: "text-info", label: "Draft" }
      ]
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
      tags: [
        { className: "text-success", label: "Active" }
      ]
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
      tags: [
        { className: "text-default", label: "Default" }
      ]
    },
    {
      id: 6,
      firstName: 'Damiano',
      lastName: "O'Reilly",
      email: 'doreilly5@weben.uk',
      gender: 'Male',
      catchPhrase: 'Horizontal grid-enabled productivity',
      jobTitle: 'Clinical Specialist',
      requests: 11,
      date: '2020-04-17',
      tags: [
        { className: "text-error", label: "Expired" }
      ]
    },
    {
      id: 7,
      firstName: 'Dunc',
      lastName: 'Jermyn',
      email: 'djemyn6@live.com',
      gender: 'Male',
      catchPhrase: 'Extended client-server conglomeration',
      jobTitle: 'Biostatistician II',
      requests: 3,
      date: '2019-11-13',
      tags: [
        { className: "text-info", label: "Draft" },
        { className: "text-warning-light", label: "Expiring" }
      ]
    },
    {
      id: 8,
      firstName: 'Bessy',
      lastName: 'Maryon',
      email: 'bmyon7@salon.com',
      gender: 'Female',
      catchPhrase: 'Team-oriented client-server task-force',
      jobTitle: 'Engineer II',
      requests: 1,
      date: '2020-01-09',
      tags: [
        { className: "text-success", label: "Active" }
      ]
    },
    {
      id: 9,
      firstName: 'Ameline',
      lastName: 'Booker',
      email: 'abor8@gmpg.org',
      gender: 'Female',
      catchPhrase: 'Sharable explicit Graphical User Interface',
      jobTitle: 'Associate Professor',
      requests: 5,
      date: '2020-02-20',
      tags: [
        { className: "text-info", label: "Draft" }
      ]
    },
    {
      id: 10,
      firstName: 'Chrysa',
      lastName: 'Duguid',
      email: 'cdud9@narod.nz',
      gender: 'Female',
      catchPhrase: 'Profound explicit approach',
      jobTitle: 'Safety Technician II',
      requests: 2,
      date: '2019-12-13',
      tags: [
        { className: "text-error", label: "Expired" }
      ]
    }
  ];

  getTotalRequests() {
    return this.data.map(t => t.requests).reduce((acc, value) => acc + value, 0);
  }

  edit(element) {
    console.log(element, "Called actions with element: ");
    this.rowEdit = element;
  }
}
