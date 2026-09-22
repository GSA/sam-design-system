import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild, DebugElement, Input, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { vi } from 'vitest';

import { PaginationModule } from '@gsa-sam/components';

import {
  SdsTableComponent,
  SdsTableRowComponent,
  SdsTableHeaderRowComponent,
  SdsTableFooterRowComponent,
  SdsTableColumnDefComponent,
  SdsTableCellDirective,
  SdsTableHeaderCellDirective,
  SdsTableFooterCellDirective,
} from './table.component';
import { TableRowNavigationDirective } from './table-row-import/table-row-navigation.directive';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

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
    tags: [{ className: 'text-error', label: 'Expired' }],
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
      { className: 'text-warning-light', label: 'Expiring' },
    ],
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
    tags: [{ className: 'text-success', label: 'Active' }],
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
    tags: [{ className: 'text-info', label: 'Draft' }],
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
    tags: [{ className: 'text-error', label: 'Expired' }],
  },
];

@Component({
  template: `
    <sds-table
      [data]="data"
      [borderless]="borderlessToggle"
      [expansion]="expansionToggle"
      sort
      [pagination]="true"
      class="maxh-mobile overflow-auto"
    >
      <sds-table-column sdsColumnName="id" sticky="true">
        <ng-template #sdsHeaderCell>ID</ng-template>
        <ng-template #sdsCell let-element="element">{{ element.id }}</ng-template>
        <ng-template #sdsFooterCell>Total</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="firstName">
        <ng-template #sdsHeaderCell>First</ng-template>
        <ng-template #sdsCell let-element="element">{{ element.firstName }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="lastName">
        <ng-template #sdsHeaderCell>Last</ng-template>
        <ng-template #sdsCell let-element="element">{{ element.lastName }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="email">
        <ng-template #sdsHeaderCell>Email</ng-template>
        <ng-template #sdsCell let-element="element"
          ><a href="https://beta.sam.gov" (click)="$event.stopPropagation()" class="usa-link">{{
            element.email
          }}</a></ng-template
        >
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="requests">
        <ng-template #sdsHeaderCell>Requests</ng-template>
        <ng-template #sdsCell let-element="element">{{ element.requests }}</ng-template>
        <ng-template #sdsFooterCell>{{ getTotalRequests() }}</ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="date">
        <ng-template #sdsHeaderCell>Date</ng-template>
        <ng-template #sdsCell let-element="element">{{ element.date | date }}</ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="tags">
        <ng-template #sdsHeaderCell>Tags</ng-template>
        <ng-template #sdsCell let-element="element">
          <ul class="usa-list usa-list--unstyled">
            <li *ngFor="let tag of element.tags">
              <usa-icon size="2x" [class]="tag.className" [icon]="'circle'"></usa-icon>

              {{ tag.label }}
            </li>
          </ul>
        </ng-template>
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>
      <sds-table-column sdsColumnName="actions" stickyEnd="true">
        <ng-template #sdsHeaderCell>Actions</ng-template>
        <ng-template #sdsCell let-element="element"
          ><a href="#" (click)="edit(element); $event.stopPropagation(); (false)" class="usa-link">Edit</a></ng-template
        >
        <ng-template #sdsFooterCell></ng-template>
      </sds-table-column>

      <sds-table-column sdsColumnName="expandedDetail" sdsExpandedTemplate="true">
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

      <sds-header-row [displayedColumns]="displayedColumns" [sticky]="true"></sds-header-row>
      <sds-row [displayedColumns]="displayedColumns" [expandOnClick]="false"></sds-row>
      <sds-footer-row [displayedColumns]="displayedColumns" [sticky]="true"></sds-footer-row>
    </sds-table>
  `,
  standalone: false,
})
class WrapperComponent {
  @ViewChild(SdsTableComponent) sdsTableComponentRef: SdsTableComponent;
  @ViewChild(SdsTableRowComponent)
  sdsTableRowComponentRef: SdsTableRowComponent;
  @ViewChild(SdsTableHeaderRowComponent)
  sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ViewChild(SdsTableFooterRowComponent)
  sdsTableFooterRowComponent: SdsTableFooterRowComponent;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date', 'tags', 'actions'];

  data = MOCK_DATA;

  expansionToggle = true;
  borderlessToggle = false;

  getTotalRequests() {
    return this.data.map((t) => t.requests).reduce((acc, value) => acc + value, 0);
  }
}

describe('SdsTableComponent Full', () => {
  let component: SdsTableComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let tableDe: DebugElement;
  let wrapper: WrapperComponent;

  beforeEach(waitForAsync(() => {
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
        TableRowNavigationDirective,
        UsaIconStubComponent,
        WrapperComponent,
      ],
      imports: [MatTableModule, MatSortModule, MatPaginatorModule, BrowserAnimationsModule, PaginationModule],
    }).compileComponents();
  }));

  describe('Table Component', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      const wrapperComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      component = wrapperComponent.sdsTableComponentRef;
      tableDe = fixture.debugElement;
      wrapper = wrapperComponent;
    });

    it('should create', waitForAsync(() => {
      expect(component).toBeTruthy();
    }));

    it('isArray should return true', waitForAsync(() => {
      expect(component.isArray(['test'])).toBeTruthy();
    }));

    it('check after content init', waitForAsync(() => {
      component.ngAfterContentInit();
      fixture.detectChanges();
      expect(component).toBeTruthy();
    }));

    it('should update pagination', waitForAsync(() => {
      component.page = {
        pageNumber: 1,
        pageSize: 5,
        totalPages: 0,
      };
      component.updateSdsPagination();
      fixture.detectChanges();
      expect(component.page.totalPages).toBe(2);
    }));

    it('default string sort should return lowercase', waitForAsync(() => {
      expect(component.defaultSort(component.data[0], 'firstName')).toBe('gregorius');
    }));

    it('default number sort should return lowercase', waitForAsync(() => {
      expect(component.defaultSort(component.data[0], 'requests')).toBe(1);
    }));

    it('should set top and bottom id when tableName is provided', () => {
      component.tableName = 'myTestTable';
      component.ngOnInit();
      expect(component.top.id).toBe('myTestTableTop');
      expect(component.bottom.id).toBe('myTestTableBottom');
    });

    it('should get and set borderless correctly', () => {
      component.borderless = true;
      expect(component.borderless).toBe(true);
      component.borderless = false;
      expect(component.borderless).toBe(false);
    });

    it('should toggle expansion on onExpansionClicked', () => {
      const mockRow = MOCK_DATA[0];
      let emittedElement: any;
      component.expansionClicked.subscribe((el) => (emittedElement = el));

      component.rowConfig.expandOnClick = false;
      component.onExpansionClicked(mockRow);
      expect(component.expandedElement).toBe(mockRow);
      expect(emittedElement).toBe(mockRow);

      component.onExpansionClicked(mockRow);
      expect(component.expandedElement).toBeNull();
      expect(emittedElement).toBeNull();
    });

    it('should not toggle expansion on onExpansionClicked if expandOnClick is true', () => {
      const mockRow = MOCK_DATA[0];
      component.rowConfig.expandOnClick = true;
      component.expandedElement = null;

      component.onExpansionClicked(mockRow);
      expect(component.expandedElement).toBeNull();
    });

    it('should check if columns are clickable', () => {
      expect(component.columnsClickable).toBe(false);
      if (component.sdsColumnItems.first) {
        component.sdsColumnItems.first.isClickable = true;
        expect(component.columnsClickable).toBe(true);
        component.sdsColumnItems.first.isClickable = false;
      }
    });

    it('should update dataSource, sort, and pagination on ngOnChanges when data changes', () => {
      const newData = [MOCK_DATA[0], MOCK_DATA[1]];
      const sortSpy = vi.fn((data, sortHeaderId) => data[sortHeaderId]);
      component.sortFn = sortSpy;
      component.sort = 'true';

      component.ngOnChanges({
        data: new SimpleChange(null, newData, false),
      });

      expect(component.dataSource.data).toEqual(newData);
      expect(component.dataSource.sortingDataAccessor).toBe(sortSpy);
      expect(component.dataSource.sort).toBe(component.matSort);
      expect(component.dataSource.paginator).toBe(component.matPaginator);
    });

    it('should use defaultSort on ngOnChanges when sortFn is not provided', () => {
      const newData = [MOCK_DATA[0]];
      component.sortFn = null;
      component.sort = 'true';

      component.ngOnChanges({
        data: new SimpleChange(null, newData, false),
      });

      expect(component.dataSource.sortingDataAccessor).toBe(component.defaultSort);
    });

    it('should return correct type from typeOf', () => {
      expect(component.typeOf('string')).toBe('string');
      expect(component.typeOf(123)).toBe('number');
      expect(component.typeOf({})).toBe('object');
    });

    it('should configure sort on ngOnChanges when sort is an array of column names or empty string', () => {
      component.sort = ['firstName', 'lastName'] as any;
      component.ngOnChanges({
        data: new SimpleChange(null, [MOCK_DATA[0]], false),
      });
      expect(component.dataSource.sort).toBe(component.matSort);

      component.sort = '';
      component.ngOnChanges({
        data: new SimpleChange(null, [MOCK_DATA[0]], false),
      });
      expect(component.dataSource.sort).toBe(component.matSort);
    });

    it('should not add expandedIndicator again if already present or if displayedColumns is undefined', () => {
      component.expansion = true;
      component.sdsTableRowComponent.displayedColumns = ['expandedIndicator', 'id', 'firstName'];
      component.ngAfterContentInit();
      expect(component.rowConfig.displayedColumns.filter((c) => c === 'expandedIndicator').length).toBe(1);

      component.sdsTableRowComponent.displayedColumns = undefined as any;
      component.ngAfterContentInit();
      expect(component.rowConfig.displayedColumns).toBeUndefined();
    });
  });
});
