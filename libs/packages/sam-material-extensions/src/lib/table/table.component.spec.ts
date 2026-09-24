import { Component, ViewChild, DebugElement, Input, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { vi } from 'vitest';

import { PaginationModule } from '@gsa-sam/components';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  SdsTableComponent,
  SdsTableRowComponent,
  SdsTableHeaderRowComponent,
  SdsTableFooterRowComponent,
  SdsTableColumnDefComponent,
  SdsTableCellDirective,
  SdsTableHeaderCellDirective,
  SdsTableFooterCellDirective,
  SdsTableHeaderColor,
} from './table.component';
import { TableRowNavigationDirective } from './table-row-import/table-row-navigation.directive';
import { SdsTableSettings } from './models/table-settings.model';
import { SdsTableColumnSettings } from './models/table-column-settings.model';

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
    classesToApply: 'highlighted-test-row',
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
      [sort]="sortToggle"
      [sortFn]="sortFn"
      [pagination]="paginationToggle"
      [tableName]="tableName"
      [headerColor]="headerColor"
      [expandedAriaLabel]="expandedAriaLabel"
      [collapsedAriaLabel]="collapsedAriaLabel"
      (rowClicked)="onRowClicked($event)"
      (expansionClicked)="onExpansionClicked($event)"
      class="maxh-mobile overflow-auto"
    >
      <sds-table-column sdsColumnName="id" [sticky]="true" [isClickable]="idClickable">
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
      <sds-table-column sdsColumnName="actions" [stickyEnd]="true">
        <ng-template #sdsHeaderCell>Actions</ng-template>
        <ng-template #sdsCell let-element="element"
          ><a href="#" (click)="edit(element); $event.stopPropagation(); (false)" class="usa-link">Edit</a></ng-template
        >
        <!-- Notice no sdsFooterCell here to test the !sdsColumnItem.footerCellTemplate branch -->
      </sds-table-column>

      <sds-table-column sdsColumnName="expandedDetail" [sdsExpandedTemplate]="true">
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
      <sds-row
        [displayedColumns]="displayedColumns"
        [expandOnClick]="expandOnClick"
        [highlightOnHover]="highlightOnHover"
        [rowClickNavigate]="rowClickNavigate"
      ></sds-row>
      <sds-footer-row [displayedColumns]="displayedColumns" [sticky]="true"></sds-footer-row>
    </sds-table>
  `,
  standalone: false,
})
class WrapperComponent {
  @ViewChild(SdsTableComponent) sdsTableComponentRef: SdsTableComponent;
  @ViewChild(SdsTableRowComponent) sdsTableRowComponentRef: SdsTableRowComponent;
  @ViewChild(SdsTableHeaderRowComponent) sdsTableHeaderRowComponent: SdsTableHeaderRowComponent;
  @ViewChild(SdsTableFooterRowComponent) sdsTableFooterRowComponent: SdsTableFooterRowComponent;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'requests', 'date', 'tags', 'actions'];

  data = MOCK_DATA;

  expansionToggle = true;
  borderlessToggle = false;
  sortToggle: any = 'true';
  sortFn: any;
  paginationToggle = true;
  tableName: string;
  headerColor: SdsTableHeaderColor;
  expandedAriaLabel = 'Collapse details';
  collapsedAriaLabel = 'Expand details';
  idClickable = false;
  expandOnClick = false;
  highlightOnHover = false;
  rowClickNavigate: string;

  clickedRowIndex: number | null = null;
  clickedExpansionElement: any = null;

  onRowClicked(index: number) {
    this.clickedRowIndex = index;
  }

  onExpansionClicked(element: any) {
    this.clickedExpansionElement = element;
  }

  edit(element: any) {
    return element;
  }

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
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        PaginationModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    tableDe = fixture.debugElement;
    fixture.detectChanges();
    component = wrapper.sdsTableComponentRef;
  });

  describe('Basic Initialization & Helpers', () => {
    it('should create component and references', () => {
      expect(component).toBeTruthy();
      expect(wrapper.sdsTableRowComponentRef).toBeTruthy();
      expect(wrapper.sdsTableHeaderRowComponent).toBeTruthy();
      expect(wrapper.sdsTableFooterRowComponent).toBeTruthy();
    });

    it('isArray should return true for arrays and false for non-arrays', () => {
      expect(component.isArray(['test'])).toBe(true);
      expect(component.isArray([])).toBe(true);
      expect(component.isArray('string')).toBe(false);
      expect(component.isArray(123)).toBe(false);
      expect(component.isArray({})).toBe(false);
      expect(component.isArray(null)).toBe(false);
    });

    it('check after content init', waitForAsync(() => {
      component.ngAfterContentInit();
      fixture.detectChanges();
      expect(component).toBeTruthy();
    }));

    it('typeOf should return correct type strings', () => {
      expect(component.typeOf('hello')).toBe('string');
      expect(component.typeOf(42)).toBe('number');
      expect(component.typeOf(true)).toBe('boolean');
      expect(component.typeOf({})).toBe('object');
      expect(component.typeOf([])).toBe('object');
    });

    it('should handle borderless getter and setter', () => {
      component.borderless = true;
      fixture.detectChanges();
      expect(component.borderless).toBe(true);
      const container = tableDe.query(By.css('.sds-table__container'));
      expect(container.nativeElement.classList.contains('sds-table__container--borderless')).toBe(true);

      component.borderless = false;
      fixture.detectChanges();
      expect(component.borderless).toBe(false);
      expect(container.nativeElement.classList.contains('sds-table__container--borderless')).toBe(false);
    });

    it('should handle expansion and pagination getters and setters', () => {
      component.expansion = true;
      expect(component.expansion).toBe(true);
      component.expansion = false;
      expect(component.expansion).toBe(false);

      component.pagination = true;
      expect(component.pagination).toBe(true);
      component.pagination = false;
      expect(component.pagination).toBe(false);
    });

    it('should configure tableName into top and bottom IDs on ngOnInit', () => {
      component.tableName = 'contractOpportunities';
      component.ngOnInit();
      component.dataSource.paginator = component.matPaginator;
      expect(component.top).toEqual({ id: 'contractOpportunitiesTop' });
      expect(component.bottom).toEqual({ id: 'contractOpportunitiesBottom' });
    });

    it('should keep default top and bottom IDs when tableName is not set', () => {
      component.tableName = undefined;
      component.ngOnInit();
      component.dataSource.paginator = component.matPaginator;
      expect(component.top).toEqual({ id: 'top' });
      expect(component.bottom).toEqual({ id: 'bottom' });
    });

    it('should apply classesToApply to row element', () => {
      const highlightedRow = tableDe.query(By.css('.highlighted-test-row'));
      expect(highlightedRow).toBeTruthy();
    });
  });

  describe('Sorting', () => {
    it('defaultSort should return lowercase for strings', () => {
      expect(component.defaultSort(component.data[0], 'firstName')).toBe('gregorius');
    });

    it('defaultSort should return non-string values as-is', () => {
      expect(component.defaultSort(component.data[0], 'requests')).toBe(1);
      expect(component.defaultSort(component.data[0], 'id')).toBe(1);
    });

    it('should support sort = true, empty string, and sort array in ngAfterViewInit', () => {
      component.sort = 'true';
      component.ngAfterViewInit();
      expect(component.dataSource.sort).toBe(component.matSort);
      expect(component.dataSource.sortingDataAccessor).toBe(component.defaultSort);

      component.sort = '';
      component.ngAfterViewInit();
      expect(component.dataSource.sort).toBe(component.matSort);

      component.sort = ['firstName', 'lastName'] as any;
      component.ngAfterViewInit();
      expect(component.dataSource.sort).toBe(component.matSort);
    });

    it('should support custom sortFn in ngAfterViewInit and ngOnChanges', () => {
      const customSort = (item: any, headerId: string) => `custom_${item[headerId]}`;
      component.sort = 'true';
      component.sortFn = customSort;
      component.ngAfterViewInit();
      expect(component.dataSource.sortingDataAccessor).toBe(customSort);

      const newData = [{ id: 99, firstName: 'Zeta' }];
      component.ngOnChanges({
        data: new SimpleChange(null, newData, false),
      });
      expect(component.dataSource.sortingDataAccessor).toBe(customSort);
    });

    it('should handle ngOnChanges data update with default sort and pagination', () => {
      const newData = [
        { id: 101, firstName: 'Alice', requests: 5 },
        { id: 102, firstName: 'Bob', requests: 10 },
      ];
      component.sort = 'true';
      component.sortFn = undefined;
      component.pagination = true;
      component.page = { pageNumber: 1, pageSize: 5, totalPages: 1 };

      component.ngOnChanges({
        data: new SimpleChange(component.data, newData, false),
      });

      expect(component.dataSource.data).toEqual(newData);
      expect(component.dataSource.sort).toBe(component.matSort);
      expect(component.dataSource.paginator).toBe(component.matPaginator);
      expect(component.totalItems).toBe(2);
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

    it('should render mat-sort-header only for columns in sort array', () => {
      const customFixture = TestBed.createComponent(WrapperComponent);
      customFixture.componentInstance.sortToggle = ['id', 'firstName'];
      customFixture.detectChanges();

      const sortHeaders = customFixture.debugElement.queryAll(By.css('th[mat-sort-header]'));
      const sortColumnClasses = sortHeaders.map((th) =>
        ['id', 'firstName'].find((col) => th.nativeElement.classList.contains(`cdk-column-${col}`)),
      );
      expect(sortHeaders.length).toBe(2);
      expect(sortColumnClasses).toEqual(['id', 'firstName']);

      const nonSortHeaders = customFixture.debugElement.queryAll(By.css('th[mat-header-cell]:not([mat-sort-header])'));
      const nonSortColumnClasses = nonSortHeaders
        .map((th) =>
          Array.from(th.nativeElement.classList)
            .filter((c: string) => c.startsWith('cdk-column-'))
            .map((c: string) => c.replace('cdk-column-', '')),
        )
        .flat();

      expect(nonSortColumnClasses).not.toContain('id');
      expect(nonSortColumnClasses).not.toContain('firstName');
      for (const col of ['lastName', 'email', 'requests', 'date', 'tags', 'actions']) {
        expect(nonSortColumnClasses).toContain(col);
      }
    });
  });

  describe('Pagination', () => {
    it('should update pagination properly with updateSdsPagination', () => {
      component.page = {
        pageNumber: 1,
        pageSize: 5,
        totalPages: 0,
      };
      component.updateSdsPagination();
      fixture.detectChanges();
      expect(component.page.totalPages).toBe(2);
      expect(component.totalItems).toBe(10);
      expect(component.dataSource.paginator.pageIndex).toBe(0);
    });

    it('should handle updateSdsPagination safely when page or paginator is null', () => {
      const originalPage = component.page;
      component.page = null;
      expect(() => component.updateSdsPagination()).not.toThrow();

      component.page = originalPage;
      const originalPaginator = component.dataSource.paginator;
      component.dataSource.paginator = null;
      expect(() => component.updateSdsPagination()).not.toThrow();
      component.dataSource.paginator = originalPaginator;
    });

    it('should react to pageChange emissions', () => {
      const currentSize = component.dataSource.paginator.pageSize;
      component.page = { pageNumber: 2, pageSize: currentSize, totalPages: 4 };
      component.pageChange.next(component.page);
      fixture.detectChanges();

      expect(component.dataSource.paginator.pageIndex).toBe(1);
      expect(component.page.totalPages).toBe(Math.ceil(component.dataSource.data.length / currentSize));
    });

    it('should safely early-return when paginator is removed before initialized timer fires', fakeAsync(() => {
      component.pagination = true;
      component.showPagination = false;
      component.ngAfterViewInit();

      // Remove the paginator before the queued callback runs
      component.dataSource.paginator = null as any;

      // Advance the timer; verify the callback completes without throwing
      expect(() => tick()).not.toThrow();
      expect(component.showPagination).toBe(false);
    }));

    it('should cancel paginator timer and not run callback after component is destroyed', fakeAsync(() => {
      component.pagination = true;
      component.showPagination = false;
      component.ngAfterViewInit();

      // Destroy the component before the queued callback runs
      component.ngOnDestroy();

      // Advance the timer; verify callback does not execute or throw
      expect(() => tick()).not.toThrow();
      expect(component.showPagination).toBe(false);
    }));
  });

  describe('Expansion & Indicator Keyboard/Click Interactions', () => {
    it('should add expandedIndicator column when expansion is true', () => {
      expect(component.rowConfig.displayedColumns[0]).toBe('expandedIndicator');
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

    it('onExpansionClicked should toggle expandedElement when expandOnClick is false', () => {
      const item = component.data[0];
      component.rowConfig.expandOnClick = false;

      component.onExpansionClicked(item);
      expect(component.expandedElement).toBe(item);
      expect(wrapper.clickedExpansionElement).toBe(item);

      component.onExpansionClicked(item);
      expect(component.expandedElement).toBeNull();
      expect(wrapper.clickedExpansionElement).toBeNull();
    });

    it('onExpansionClicked should not change expandedElement when expandOnClick is true', () => {
      const item = component.data[0];
      component.rowConfig.expandOnClick = true;
      component.expandedElement = null;

      component.onExpansionClicked(item);
      expect(component.expandedElement).toBeNull();
    });

    it('should expand and collapse when clicking expansion indicator cell in DOM', () => {
      const indicatorCell = tableDe.query(By.css('td.cursor-pointer'));
      expect(indicatorCell).toBeTruthy();

      expect(indicatorCell.attributes['aria-expanded']).toBe('false');
      expect(indicatorCell.attributes['aria-label']).toBe('Expand details');

      indicatorCell.nativeElement.click();
      fixture.detectChanges();

      expect(component.expandedElement).toBe(component.data[0]);
      expect(indicatorCell.attributes['aria-expanded']).toBe('true');
      expect(indicatorCell.attributes['aria-label']).toBe('Collapse details');

      indicatorCell.nativeElement.click();
      fixture.detectChanges();

      expect(component.expandedElement).toBeNull();
      expect(indicatorCell.attributes['aria-expanded']).toBe('false');
    });

    it('should expand and collapse on Enter and Space keydown events under jsdom', () => {
      const indicatorCell = tableDe.query(By.css('td.cursor-pointer'));
      expect(indicatorCell).toBeTruthy();

      indicatorCell.triggerEventHandler('keydown.enter', null);
      fixture.detectChanges();
      expect(component.expandedElement).toBe(component.data[0]);

      indicatorCell.triggerEventHandler('keydown.enter', null);
      fixture.detectChanges();
      expect(component.expandedElement).toBeNull();

      indicatorCell.triggerEventHandler('keydown.space', null);
      fixture.detectChanges();
      expect(component.expandedElement).toBe(component.data[0]);

      indicatorCell.triggerEventHandler('keydown.space', null);
      fixture.detectChanges();
      expect(component.expandedElement).toBeNull();
    });

    it('should support custom expandedAriaLabel and collapsedAriaLabel', () => {
      wrapper.expandedAriaLabel = 'Custom Collapse';
      wrapper.collapsedAriaLabel = 'Custom Expand';
      fixture.detectChanges();

      const indicatorCell = tableDe.query(By.css('td.cursor-pointer'));
      expect(indicatorCell.attributes['aria-label']).toBe('Custom Expand');

      indicatorCell.nativeElement.click();
      fixture.detectChanges();
      expect(indicatorCell.attributes['aria-label']).toBe('Custom Collapse');
    });
  });

  describe('Row Selection, Click Handling & Clickable Columns', () => {
    it('columnsClickable should return false when no column is clickable', () => {
      expect(component.columnsClickable).toBe(false);
    });

    it('columnsClickable should return true when a column is clickable', () => {
      wrapper.idClickable = true;
      fixture.detectChanges();
      expect(component.columnsClickable).toBe(true);
    });

    it('should emit rowClicked on row click when columnsClickable is false', () => {
      wrapper.idClickable = false;
      fixture.detectChanges();

      const rows = tableDe.queryAll(By.css('tr.sds-table__row'));
      rows[0].nativeElement.click();
      fixture.detectChanges();

      expect(wrapper.clickedRowIndex).toBe(0);
    });

    it('should toggle expandedElement on row click when expandOnClick is true', () => {
      wrapper.expandOnClick = true;
      component.rowConfig.expandOnClick = true;
      fixture.detectChanges();

      const rows = tableDe.queryAll(By.css('tr.sds-table__row'));
      rows[0].nativeElement.click();
      fixture.detectChanges();

      expect(component.expandedElement).toBe(component.data[0]);
      expect(rows[0].nativeElement.classList.contains('sds-table__row--expanded')).toBe(true);

      rows[0].nativeElement.click();
      fixture.detectChanges();
      expect(component.expandedElement).toBeNull();
      expect(rows[0].nativeElement.classList.contains('sds-table__row--expanded')).toBe(false);
    });

    it('should emit rowClicked from cell click when column isClickable is true', () => {
      wrapper.idClickable = true;
      fixture.detectChanges();

      wrapper.clickedRowIndex = null;
      // Click on row itself (not cell)
      const rows = tableDe.queryAll(By.css('tr.sds-table__row'));
      rows[0].nativeElement.click();
      fixture.detectChanges();
      expect(wrapper.clickedRowIndex).toBeNull();

      // Click on id clickable cell
      const idCells = tableDe.queryAll(By.css('td.cdk-column-id'));
      idCells[0].nativeElement.click();
      fixture.detectChanges();
      expect(wrapper.clickedRowIndex).toBe(0);
    });
  });

  describe('Header Colors & Column Templates', () => {
    it('should apply SdsTableHeaderColor classes to header row', () => {
      wrapper.headerColor = SdsTableHeaderColor.InfoLighter;
      fixture.detectChanges();
      let headerRow = tableDe.query(By.css('tr[mat-header-row]'));
      expect(headerRow.nativeElement.classList.contains('header-info-lighter')).toBe(true);

      wrapper.headerColor = SdsTableHeaderColor.AccentCoolLight;
      fixture.detectChanges();
      headerRow = tableDe.query(By.css('tr[mat-header-row]'));
      expect(headerRow.nativeElement.classList.contains('header-accent-cool-light')).toBe(true);

      wrapper.headerColor = SdsTableHeaderColor.PrimaryLighter;
      fixture.detectChanges();
      headerRow = tableDe.query(By.css('tr[mat-header-row]'));
      expect(headerRow.nativeElement.classList.contains('header-primary-lighter')).toBe(true);
    });

    it('should render footer template when footerCellTemplate is present and empty cell when absent', () => {
      const footerCells = tableDe.queryAll(By.css('th[mat-footer-cell], td[mat-footer-cell]'));
      expect(footerCells.length).toBeGreaterThan(0);

      // The ID column footer cell contains "Total"
      const totalCell = footerCells.find((c) => c.nativeElement.textContent?.includes('Total'));
      expect(totalCell).toBeTruthy();

      // The actions column has no sdsFooterCell template, so it should render an empty footer cell
      const actionsFooterCell = tableDe.query(By.css('td[mat-footer-cell].cdk-column-actions'));
      expect(actionsFooterCell).toBeTruthy();
      expect(actionsFooterCell.nativeElement.textContent.trim()).toBe('');
    });

    it('should gracefully handle ngAfterContentInit when header or footer rows are undefined', () => {
      const origHeader = component.sdsTableHeaderRowComponent;
      const origFooter = component.sdsTableFooterRowComponent;

      component.sdsTableHeaderRowComponent = undefined;
      component.sdsTableFooterRowComponent = undefined;

      expect(() => component.ngAfterContentInit()).not.toThrow();

      component.sdsTableHeaderRowComponent = origHeader;
      component.sdsTableFooterRowComponent = origFooter;
    });

    it('should verify SdsTableColumnDefComponent properties', () => {
      const colDef = component.sdsColumnItems.first;
      expect(colDef.sdsColumnName).toBe('id');
      expect(colDef.sticky).toBe(true);
      expect(colDef.columnHeaderCell).toBeTruthy();
      expect(colDef.columnCell).toBeTruthy();
      expect(colDef.columnFooterCell).toBeTruthy();
      expect(() => colDef.ngAfterContentInit()).not.toThrow();
    });
  });

  describe('Keyboard and Arrow Row Navigation Interactions', () => {
    it('should retain row focus when ArrowDown is dispatched without built-in row navigation', () => {
      const rows = tableDe.queryAll(By.css('tr.sds-table__row'));
      expect(rows.length).toBeGreaterThan(1);

      const firstRow: HTMLTableRowElement = rows[0].nativeElement;
      const secondRow: HTMLTableRowElement = rows[1].nativeElement;

      firstRow.setAttribute('tabindex', '0');
      secondRow.setAttribute('tabindex', '0');

      firstRow.focus();
      expect(document.activeElement).toBe(firstRow);

      // SdsTableComponent does not implement arrow navigation; focus remains on the active row.
      const downArrowEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown', bubbles: true });
      firstRow.dispatchEvent(downArrowEvent);
      expect(document.activeElement).toBe(firstRow);
      expect(document.activeElement).not.toBe(secondRow);
    });
  });

  describe('Models Verification', () => {
    it('should instantiate SdsTableSettings model and set properties', () => {
      const settings = new SdsTableSettings();
      settings.borderless = true;
      settings.sort = true;
      settings.stickyHeader = true;

      expect(settings.borderless).toBe(true);
      expect(settings.sort).toBe(true);
      expect(settings.stickyHeader).toBe(true);
    });

    it('should instantiate SdsTableColumnSettings model and set properties', () => {
      const colSettings = new SdsTableColumnSettings();
      expect(colSettings.sticky).toBe(false);

      colSettings.primaryKey = 'name';
      colSettings.header = 'Name';
      colSettings.sticky = true;

      expect(colSettings.primaryKey).toBe('name');
      expect(colSettings.header).toBe('Name');
      expect(colSettings.sticky).toBe(true);
    });
  });
});
