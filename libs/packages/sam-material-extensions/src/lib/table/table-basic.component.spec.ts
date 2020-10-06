import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective } from './table.component';
import { PaginationModule } from '@gsa-sam/components';

const MOCK_DATA = [
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

@Component({
  template: `
  <sds-table [data]="data" expansion="false">

    <sds-table-column sdsColumnName="id">
      <ng-template #sdsHeaderCell>ID</ng-template>
      <ng-template #sdsCell let-element="element">{{ element.id }}</ng-template>
    </sds-table-column>
    <sds-table-column sdsColumnName="firstName">
      <ng-template #sdsHeaderCell>First</ng-template>
      <ng-template #sdsCell let-element="element">{{ element.firstName }}</ng-template>
    </sds-table-column>
    <sds-table-column sdsColumnName="lastName">
      <ng-template #sdsHeaderCell>Last</ng-template>
      <ng-template #sdsCell let-element="element">{{ element.lastName }}</ng-template>
    </sds-table-column>
    <sds-table-column sdsColumnName="email">
      <ng-template #sdsHeaderCell>Email</ng-template>
      <ng-template #sdsCell let-element="element"><a href="https://beta.sam.gov" (click)="$event.stopPropagation()" class="usa-link">{{ element.email }}</a></ng-template>
    </sds-table-column>
    <sds-table-column sdsColumnName="requests">
      <ng-template #sdsHeaderCell>Requests</ng-template>
      <ng-template #sdsCell let-element="element">{{ element.requests }}</ng-template>
    </sds-table-column>
    <sds-table-column sdsColumnName="date">
      <ng-template #sdsHeaderCell>Date</ng-template>
      <ng-template #sdsCell let-element="element">{{ element.date | date }}</ng-template>
    </sds-table-column>

    <sds-row [displayedColumns]="displayedColumns"></sds-row>

  </sds-table>
  `
})
class WrapperComponent {
  @ViewChild(SdsTableComponent) sdsTableComponentRef: SdsTableComponent;
  @ViewChild(SdsTableRowComponent) sdsTableRowComponentRef: SdsTableRowComponent;
  @ViewChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date'];

  data = MOCK_DATA;

  sortToggle = true;
  expansionToggle = true;
  borderlessToggle = false;

}


describe('SdsTableComponent Basic', () => {
  let component: SdsTableComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let tableDe: DebugElement;
  let wrapper: WrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsTableComponent, SdsTableRowComponent, SdsTableHeaderRowComponent, SdsTableFooterRowComponent, SdsTableColumnDefComponent, SdsTableCellDirective, SdsTableHeaderCellDirective, SdsTableFooterCellDirective, WrapperComponent],
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        PaginationModule
      ]
    }).compileComponents();
  }));

  describe('Table Component', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      const wrapperComponent = fixture.debugElement.componentInstance;
      component = wrapperComponent.sdsTableComponentRef;
      tableDe = fixture.debugElement;
      wrapper = wrapperComponent;

      fixture.detectChanges();
    });

    it('should create', async(() => {
      expect(component).toBeTruthy();
    }));

  });
});
