import { Component } from '@angular/core';
import { SdsTableSettings, SdsTableColumnSettings } from '@sam-design-system/sam-material-extensions';

@Component({
  selector: 'gsa-sam-table-basic',
  templateUrl: './table-basic.component.html'
})

export class TableBasicComponent {

  tableSettings: SdsTableSettings = {caption: "basic table"};

  columns: SdsTableColumnSettings[] = [
    {
      primaryKey: 'id',
      header: 'ID'
    },
    {
      primaryKey: 'firstName',
      header: 'First Name'
    },
    {
      primaryKey: 'lastName',
      header: 'Last Name'
    },
    { primaryKey: 'email' },
    { primaryKey: 'gender' },
    {
      primaryKey: 'jobTitle',
      header: 'Job Title'
    },
    {
      primaryKey: 'catchPhrase',
      header: 'Catch Phrase'
    },
    {
      primaryKey: 'date',
      alternativeKey: 'altDate'
   }
  ];

  data = [
    {
      id: 1,
      firstName: 'Gregorius',
      lastName: 'Matthews',
      email: 'gmatthews0@shutterfly.com',
      gender: 'Male',
      catchPhrase: 'Reduced needs-based initiative',
      jobTitle: 'Software Test Engineer IV',
      altDate: '2020/07/23',
    },
    {
      id: 2,
      firstName: 'Letti',
      lastName: 'Gleadhell',
      email: 'lgleadhell1@usda.gov',
      gender: 'Female',
      catchPhrase: 'Upgradable homogeneous productivity',
      jobTitle: 'GIS Technical Architect',
      date: '2020-04-11'
    },
    {
      id: 3,
      firstName: 'Vassili',
      lastName: 'McGuckin',
      email: 'vmcguckin2@phoca.cz',
      gender: 'Male',
      catchPhrase: 'Team-oriented optimizing complexity',
      jobTitle: 'Media Manager IV',
      date: '2020-04-22'
    },
    {
      id: 4,
      firstName: 'Oren',
      lastName: 'Downey',
      email: 'odowney3@bloglines.com',
      gender: 'Male',
      catchPhrase: 'Synergized 3rd generation projection',
      jobTitle: 'Account Coordinator',
      date: '2019-11-02'
    },
    {
      id: 5,
      firstName: 'Claribel',
      lastName: 'Donne',
      email: 'cdonne4@nasa.gov',
      gender: 'Female',
      catchPhrase: 'Organized local challenge',
      jobTitle: 'Financial Analyst',
      date: '2020-04-15'
    },
    {
      id: 6,
      firstName: 'Damiano',
      lastName: "O'Reilly",
      email: 'doreilly5@webeden.co.uk',
      gender: 'Male',
      catchPhrase: 'Horizontal grid-enabled productivity',
      jobTitle: 'Clinical Specialist',
      date: '2020-04-17'
    },
    {
      id: 7,
      firstName: 'Dunc',
      lastName: 'Jermyn',
      email: 'djermyn6@live.com',
      gender: 'Male',
      catchPhrase: 'Extended client-server conglomeration',
      jobTitle: 'Biostatistician II',
      date: '2019-11-13'
    },
    {
      id: 8,
      firstName: 'Bessy',
      lastName: 'Maryon',
      email: 'bmaryon7@salon.com',
      gender: 'Female',
      catchPhrase: 'Team-oriented client-server task-force',
      jobTitle: 'Engineer II',
      date: '2020-01-09'
    },
    {
      id: 9,
      firstName: 'Ameline',
      lastName: 'Booker',
      email: 'abooker8@gmpg.org',
      gender: 'Female',
      catchPhrase: 'Sharable explicit Graphical User Interface',
      jobTitle: 'Associate Professor',
      date: '2020-02-20'
    },
    {
      id: 10,
      firstName: 'Chrysa',
      lastName: 'Duguid',
      email: 'cduguid9@narod.ru',
      gender: 'Female',
      catchPhrase: 'Profound explicit approach',
      jobTitle: 'Safety Technician II',
      date: '2019-12-13'
    }
  ];
}
