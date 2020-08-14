import { Component } from '@angular/core';
import { SdsTableColumnSettings } from '@sam-design-system/sam-material-extensions';

@Component({
  selector: 'gsa-sam-table-sticky-column',
  templateUrl: './table-sticky-column.component.html'
})

export class TableStickyColumnComponent {

  data = [{
    id: 1,
    firstName: "Stephen",
    lastName: "Slyford",
    email: "sslyford0@tmall.com",
    gender: "Male",
    catchPhrase: "Exclusive systematic forecast",
    jobTitle: "Nuclear Power Engineer"
  }, {
    id: 2,
    firstName: "Leonard",
    lastName: "Thomton",
    email: "lthomton1@usnews.com",
    gender: "Male",
    catchPhrase: "Integrated dedicated analyzer",
    jobTitle: "Structural Analysis Engineer"
  }, {
    id: 3,
    firstName: "Guillema",
    lastName: "Carhart",
    email: "gcarhart2@usatoday.com",
    gender: "Female",
    catchPhrase: "Right-sized tangible analyzer",
    jobTitle: "Senior Cost Accountant"
  }, {
    id: 4,
    firstName: "Mona",
    lastName: "Ghent",
    email: "mghent3@fastcompany.com",
    gender: "Female",
    catchPhrase: "Centralized full-range ability",
    jobTitle: "Quality Engineer"
  }, {
    id: 5,
    firstName: "Lewiss",
    lastName: "Tapper",
    email: "ltapper4@google.ca",
    gender: "Male",
    catchPhrase: "Compatible cohesive parallelism",
    jobTitle: "Help Desk Operator"
  }, {
    id: 6,
    firstName: "Gaspar",
    lastName: "Chinnery",
    email: "gchinnery5@army.mil",
    gender: "Male",
    catchPhrase: "Implemented disintermediate task-force",
    jobTitle: "Marketing Manager"
  }, {
    id: 7,
    firstName: "Lindsey",
    lastName: "Kristoffersen",
    email: "lkristoffersen6@house.gov",
    gender: "Male",
    catchPhrase: "Public-key secondary local area network",
    jobTitle: "Pharmacist"
  }, {
    id: 8,
    firstName: "Paul",
    lastName: "Vivers",
    email: "pvivers7@taobao.com",
    gender: "Male",
    catchPhrase: "Assimilated tangible Graphic Interface",
    jobTitle: "Environmental Specialist"
  }, {
    id: 9,
    firstName: "Stillmann",
    lastName: "Braganza",
    email: "sbraganza8@admin.ch",
    gender: "Male",
    catchPhrase: "Focused value-added benchmark",
    jobTitle: "Financial Advisor"
  }, {
    id: 10,
    firstName: "Willette",
    lastName: "Risbrough",
    email: "wrisbrough9@samsung.com",
    gender: "Female",
    catchPhrase: "Polarised client-server task-force",
    jobTitle: "Financial Advisor"
  }];
  
  columns: SdsTableColumnSettings[] = [
    {
      primaryKey: 'id',
      sticky: true,
      header: "ID"
    },
    {
      primaryKey: 'firstName',
      header: "First Name"
    },
    {
      primaryKey: 'lastName',
      header: "Last Name"
    },
    { primaryKey: 'email'},
    { primaryKey: 'gender'},
    {
      primaryKey: 'jobTitle',
      header: "Job Title"
    },
    {
      primaryKey: 'catchPhrase',
      header: 'Catch Phrase'
    }
  ];

  constructor() { }
}
