import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule, SdsIconModule } from '@gsa-sam/components';

import {
  SdsTableComponent,
  SdsTableRowComponent,
  SdsTableHeaderRowComponent,
  SdsTableFooterRowComponent,
  SdsTableColumnDefComponent,
  SdsTableCellDirective,
  SdsTableHeaderCellDirective,
  SdsTableFooterCellDirective
} from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    tags: [{ className: 'text-info-dark', label: 'Normal' }]
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
      { className: 'text-warning-darker', label: 'Inactive' }
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
    tags: [{ className: 'text-info', label: 'Draft' }]
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
    tags: [{ className: 'text-success', label: 'Active' }]
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
    tags: [{ className: 'text-default', label: 'Default' }]
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
    tags: [{ className: 'text-error', label: 'Expired' }]
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
      { className: 'text-info', label: 'Draft' },
      { className: 'text-warning-light', label: 'Expiring' }
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
    tags: [{ className: 'text-success', label: 'Active' }]
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
    tags: [{ className: 'text-info', label: 'Draft' }]
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
    tags: [{ className: 'text-error', label: 'Expired' }]
  }
];

@Component({
  template: `
    <sds-table
      [data]="data"
      [borderless]="borderlessToggle"
      [expansion]="expansionToggle"
      sort
      pagination
      class="maxh-mobile overflow-auto"
    >
      <sds-table-column sdsColumnName="id" sticky="true">
        <ng-template #sdsHeaderCell>ID</ng-template>
        <ng-template #sdsCell let-element="element">{{
          element.id
        }}</ng-template>
        <ng-template #sdsFooterCell>Total</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="firstName">
        <ng-template #sdsHeaderCell>First</ng-template>
        <ng-template #sdsCell let-element="element">{{
          element.firstName
        }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="lastName">
        <ng-template #sdsHeaderCell>Last</ng-template>
        <ng-template #sdsCell let-element="element">{{
          element.lastName
        }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="email">
        <ng-template #sdsHeaderCell>Email</ng-template>
        <ng-template #sdsCell let-element="element"
          ><a
            href="https://beta.sam.gov"
            (click)="$event.stopPropagation()"
            class="usa-link"
            >{{ element.email }}</a
          ></ng-template
        >
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="requests">
        <ng-template #sdsHeaderCell>Requests</ng-template>
        <ng-template #sdsCell let-element="element">{{
          element.requests
        }}</ng-template>
        <ng-template #sdsFooterCell>{{ getTotalRequests() }}</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="date">
        <ng-template #sdsHeaderCell>Date</ng-template>
        <ng-template #sdsCell let-element="element">{{
          element.date | date
        }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="tags">
        <ng-template #sdsHeaderCell>Tags</ng-template>
        <ng-template #sdsCell let-element="element">
          <ul class="usa-list usa-list--unstyled">
            <li *ngFor="let tag of element.tags">
              <fa-icon
                [icon]="['fas', 'circle']"
                size="sm"
                [class]="tag.className"
              ></fa-icon>
              {{ tag.label }}
            </li>
          </ul>
        </ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="actions" stickyEnd="true">
        <ng-template #sdsHeaderCell>Actions</ng-template>
        <ng-template #sdsCell let-element="element"
          ><a
            href="#"
            (click)="edit(element); $event.stopPropagation(); (false)"
            class="usa-link"
            >Edit</a
          ></ng-template
        >
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>

      <sds-table-column
        sdsColumnName="expandedDetail"
        sdsExpandedTemplate="true"
      >
        <ng-template #sdsHeaderCell></ng-template>
        <ng-template #sdsCell let-element="element">
          <div class="grid-row width-full padding-3">
            <div class="grid-col-6">
              <div class="sds-field">
                <div class="sds-field__name">Catch Phrase:</div>
                <div class="sds-field__value">{{ element.catchPhrase }}</div>
              </div>
            </div>
            <div class="grid-col-6">
              <div class="sds-field">
                <div class="sds-field__name">Job Title:</div>
                <div class="sds-field__value">{{ element.jobTitle }}</div>
              </div>
            </div>
          </div>
        </ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>

      <sds-header-row
        [displayedColumns]="displayedColumns"
        [sticky]="true"
      ></sds-header-row>
      <sds-row
        [displayedColumns]="displayedColumns"
        [expandOnClick]="false"
      ></sds-row>
      <sds-footer-row
        [displayedColumns]="displayedColumns"
        [sticky]="true"
      ></sds-footer-row>
    </sds-table>
  `
})
class WrapperComponent {
  @ViewChild(SdsTableComponent) sdsTableComponentRef: SdsTableComponent;
  @ViewChild(SdsTableRowComponent)
  sdsTableRowComponentRef: SdsTableRowComponent;
  @ViewChild(SdsTableHeaderRowComponent)
  sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ViewChild(SdsTableFooterRowComponent)
  sdsTableFooterRowComponent: SdsTableFooterRowComponent;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'requests',
    'date',
    'tags',
    'actions'
  ];

  data = MOCK_DATA;

  expansionToggle = true;
  borderlessToggle = false;

  getTotalRequests() {
    return this.data
      .map(t => t.requests)
      .reduce((acc, value) => acc + value, 0);
  }
}

describe('SdsTableComponent Full', () => {
  let component: SdsTableComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let tableDe: DebugElement;
  let wrapper: WrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsTableComponent,
        SdsTableRowComponent,
        SdsTableHeaderRowComponent,
        SdsTableFooterRowComponent,
        SdsTableColumnDefComponent,
        SdsTableCellDirective,
        SdsTableHeaderCellDirective,
        SdsTableFooterCellDirective,
        WrapperComponent
      ],
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule,
        SdsIconModule,
        FontAwesomeModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        PaginationModule
      ]
    }).compileComponents();
  }));

  xdescribe('Table Component', () => {
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

    it('isArray should return true', async(() => {
      expect(component.isArray(['test'])).toBeTruthy();
    }));

    it('check after content init', async(() => {
      component.ngAfterContentInit();
      fixture.detectChanges();
      expect(component).toBeTruthy();
    }));

    it('should update pagination', async(() => {
      component.page = {
        pageNumber: 1,
        pageSize: 5,
        totalPages: 0
      };
      component.updateSdsPagination();
      fixture.detectChanges();
      expect(component.page.totalPages).toBe(2);
    }));

    it('default string sort should return lowercase', async(() => {
      expect(component.defaultSort(component.data[0], 'firstName')).toBe(
        'gregorius'
      );
    }));

    it('default number sort should return lowercase', async(() => {
      expect(component.defaultSort(component.data[0], 'requests')).toBe(1);
    }));
  });
});
