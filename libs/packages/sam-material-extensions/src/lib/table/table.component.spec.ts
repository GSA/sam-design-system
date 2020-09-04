import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleCasePipe } from '@angular/common';
import {
  MatTableDataSource,
  MatTableModule,
  MatSortModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsTableComponent } from './table.component';
import { SdsTableColumnSettings } from './models/table-column-settings.model';

const MOCK_DATA: any[] = [
  {
    id: 2,
    firstName: 'Tymothy'
  },
  {
    id: 1,
    firstName: 'Ave'
  },
  {
    id: 3,
    firstName: 'Abagail'
  }
];

const MOCK_COLUMNS: SdsTableColumnSettings[] = [
  {
    primaryKey: 'id'
  },
  {
    primaryKey: 'firstName',
    header: 'First Name'
  }
];

// detail rows
@Component({
  template: `
    <ng-template #detailRow> <span>Test Expanded Component</span> </ng-template>
    <sds-table
      [data]="data"
      [columns]="columns"
      [detailRow]="detailRow"
    ></sds-table>
  `
})
class WrapperComponent {
  @ViewChild(SdsTableComponent, {static: true}) tableComponentRef: SdsTableComponent;
  columns = MOCK_COLUMNS;
  data = MOCK_DATA;
}

describe('SdsTableComponent', () => {
  let component: SdsTableComponent;
  let fixture: ComponentFixture<SdsTableComponent>;
  let tableDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsTableComponent, WrapperComponent],
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  describe('with default settings', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SdsTableComponent);

      component = fixture.componentInstance;
      component.columns = MOCK_COLUMNS;
      component.data = MOCK_DATA;

      tableDe = fixture.debugElement;

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should populate columnIds onInit', () => {
      expect(component.columnIds.length).toEqual(MOCK_COLUMNS.length);
    });

    it('should populate dataSource with MatTableDataSource objects onInit', () => {
      expect(component.dataSource).toBeDefined();
      expect(component.dataSource instanceof MatTableDataSource).toBeTruthy();
    });

    it('should disable dataSource.set', () => {
      expect(component.sort.disabled).toEqual(true);
    });

    // column headings
    it('should set th to equal column.header if defined', () => {
      const nativeEl = tableDe.nativeElement;
      const headerCell = nativeEl.querySelectorAll('th')[1];
      expect(headerCell.innerText).toEqual(MOCK_COLUMNS[1].header);
    });

    it('should set th to column.primaryKey value titleCased if column.header is not defined', () => {
      const nativeEl = tableDe.nativeElement;
      const headerCell = nativeEl.querySelectorAll('th')[0];
      const pipe = new TitleCasePipe();
      expect(headerCell.innerText).toEqual(
        pipe.transform(MOCK_COLUMNS[0].primaryKey)
      );
    });

    // border by default
    it('should have borders', () => {
      const cont = tableDe.query(By.css('div.sds-table__container'));
      expect(cont.classes['sds-table__container--borderless']).toBeFalsy();
    });

    // sticky header not set
    it('should not have a sticky header', () => {
      const nativeEl = tableDe.nativeElement;
      const headerCell = nativeEl.querySelectorAll('th')[0];
      expect(headerCell.style.position).not.toEqual("sticky");
    });

    // sticky columns
    it('should not have a sticky first column', () => {
      const nativeEl = tableDe.nativeElement;
      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.style.position).not.toEqual("sticky");
    });
  });

  describe('with settings configured', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SdsTableComponent);

      component = fixture.componentInstance;
      component.data = MOCK_DATA;
      component.columns = MOCK_COLUMNS;

      tableDe = fixture.debugElement;

      fixture.detectChanges();
    });

    // borderless
    it('should not have a border if settings.borderless is true', () => {
      component.settings = {
        borderless: true
      };

      fixture.detectChanges();

      const cont = tableDe.query(By.css('div.sds-table__container'));
      expect(cont.classes['sds-table__container--borderless']).toBeTruthy();
    });

    // sticky header
    it('should have a sticky header if settings.stickyHeader is true', () => {
      component.settings = {
        stickyHeader: true
      };

      fixture.detectChanges();

      const nativeEl = tableDe.nativeElement;
      const headerCell = nativeEl.querySelectorAll('th')[0];
      expect(headerCell.style.position).toEqual("sticky");
    });

    it('should have a sticky first column if column.sticky is true', () => {
      component.columns[0].sticky = true;
      fixture.detectChanges();

      const nativeEl = tableDe.nativeElement;
      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.style.position).toEqual("sticky");
    });
  });

  // sorting
  describe('with sorting', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SdsTableComponent);

      component = fixture.componentInstance;
      component.data = MOCK_DATA;
      component.columns = MOCK_COLUMNS;
      component.settings = {
        sort: true
      };

      tableDe = fixture.debugElement;

      fixture.detectChanges();
    });

    it('should set dataSource.sort to instance of child MatSort', () => {
      expect(component.dataSource.sort).toEqual(component.sort);
    });

    it('should not be sorted initially', () => {
      const nativeEl = tableDe.nativeElement;
      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.innerText).toEqual('2');
    });

    it('should sort in asc order on first click', () => {
      const nativeEl = tableDe.nativeElement;
      const button = nativeEl.querySelectorAll(
        'button.mat-sort-header-button'
      )[0];

      button.click();

      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.innerText).toEqual('1');
    });

    it('should sort in desc order on second click of same sort header', () => {
      const nativeEl = tableDe.nativeElement;
      const button = nativeEl.querySelectorAll(
        'button.mat-sort-header-button'
      )[0];

      button.click();
      button.click();

      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.innerText).toEqual('3');
    });

    it('should not be sorted on third click of same sort header', () => {
      const nativeEl = tableDe.nativeElement;
      const button = nativeEl.querySelectorAll(
        'button.mat-sort-header-button'
      )[0];

      button.click();
      button.click();
      button.click();

      const dataCell = nativeEl.querySelectorAll('td')[0];
      expect(dataCell.innerText).toEqual('2');
    });
  });

  // expandable rows
  describe('with expandable rows', () => {
    let wrapperFixture: ComponentFixture<WrapperComponent>;

    beforeEach(() => {
      wrapperFixture = TestBed.createComponent(WrapperComponent);
      const wrapperComponent = wrapperFixture.debugElement.componentInstance;
      component = wrapperComponent.tableComponentRef; // SdsTableComponent
      component.data = MOCK_DATA;
      component.columns = MOCK_COLUMNS;
      wrapperFixture.detectChanges();
    });

    it('should add an additional column sdsExpandableRow if detailRow is set', () => {
      expect(component.columnIds.length).toEqual(MOCK_COLUMNS.length + 1);
    });

    it('should initially have no rows expanded', () => {
      expect(component.expandedRow).toBeNull();
    });

    it('should set expanded row to clicked row when no row is expanded and null when clicked row is already expanded', () => {
      const compiled = wrapperFixture.debugElement.nativeElement;
      const button = compiled.querySelectorAll('button');
      button[0].click();
      expect(component.expandedRow).toEqual(component.data[0]);
      button[0].click();
      expect(component.expandedRow).toBeNull();
    });
  });
});
