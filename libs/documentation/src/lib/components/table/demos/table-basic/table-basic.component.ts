import { Component } from '@angular/core';
import { SdsTableColumnSettings } from '@gsa-sam/sam-material-extensions';

@Component({
  templateUrl: './table-basic.component.html'
})

export class TableBasicComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'date', 'tags', 'actions'];

  data = [
    {
      id: 1,
      firstName: 'Gregorius',
      lastName: 'Matthews',
      email: 'gmatthews0@shutterfly.com',
      gender: 'Male',
      catchPhrase: 'Reduced needs-based initiative',
      jobTitle: 'Software Test Engineer IV',
      date: '2020-07-23',
      tags: [
        { className: "text-info-dark", label: "Submitted" }
      ]
    },
    {
      id: 2,
      firstName: 'Letti',
      lastName: 'Gleadhell',
      email: 'lgleadhell1@usda.gov',
      gender: 'Female',
      catchPhrase: 'Upgradable homogeneous productivity',
      jobTitle: 'GIS Technical Architect',
      date: '2020-04-11',
      tags: [
        { className: "text-error", label: "Expired" },
        { className: "text-warning-darker", label: "Deactivated" }
      ]
    },
    {
      id: 3,
      firstName: 'Vassili',
      lastName: 'McGuckin',
      email: 'vmcguckin2@phoca.cz',
      gender: 'Male',
      catchPhrase: 'Team-oriented optimizing complexity',
      jobTitle: 'Media Manager IV',
      date: '2020-04-22',
      tags: [
        { className: "text-info", label: "Draft" }
      ]
    },
    {
      id: 4,
      firstName: 'Oren',
      lastName: 'Downey',
      email: 'odowney3@bloglines.com',
      gender: 'Male',
      catchPhrase: 'Synergized 3rd generation projection',
      jobTitle: 'Account Coordinator',
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
      date: '2020-04-15',
      tags: [
        { className: "text-default", label: "Default" }
      ]
    },
    {
      id: 6,
      firstName: 'Damiano',
      lastName: "O'Reilly",
      email: 'doreilly5@webeden.co.uk',
      gender: 'Male',
      catchPhrase: 'Horizontal grid-enabled productivity',
      jobTitle: 'Clinical Specialist',
      date: '2020-04-17',
      tags: [
        { className: "text-error", label: "Expired" }
      ]
    },
    {
      id: 7,
      firstName: 'Dunc',
      lastName: 'Jermyn',
      email: 'djermyn6@live.com',
      gender: 'Male',
      catchPhrase: 'Extended client-server conglomeration',
      jobTitle: 'Biostatistician II',
      date: '2019-11-13',
      tags: [
        { className: "text-info", label: "Draft" },
        { className: "text-warning-light", label: "In Progress" }
      ]
    },
    {
      id: 8,
      firstName: 'Bessy',
      lastName: 'Maryon',
      email: 'bmaryon7@salon.com',
      gender: 'Female',
      catchPhrase: 'Team-oriented client-server task-force',
      jobTitle: 'Engineer II',
      date: '2020-01-09',
      tags: [
        { className: "text-success", label: "Active" }
      ]
    },
    {
      id: 9,
      firstName: 'Ameline',
      lastName: 'Booker',
      email: 'abooker8@gmpg.org',
      gender: 'Female',
      catchPhrase: 'Sharable explicit Graphical User Interface',
      jobTitle: 'Associate Professor',
      date: '2020-02-20',
      tags: [
        { className: "text-info", label: "Draft" }
      ]
    },
    {
      id: 10,
      firstName: 'Chrysa',
      lastName: 'Duguid',
      email: 'cduguid9@narod.ru',
      gender: 'Female',
      catchPhrase: 'Profound explicit approach',
      jobTitle: 'Safety Technician II',
      date: '2019-12-13',
      tags: [
        { className: "text-error", label: "Expired" }
      ]
    }
  ];

  edit(element) {
    console.log(element, "Called actions with element: ");
  }
}
