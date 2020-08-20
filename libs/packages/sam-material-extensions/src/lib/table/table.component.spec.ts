import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource, MatTableModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, ViewChild } from '@angular/core';

import { SdsTableComponent } from './table.component';

let data: any[] = [{
  id: 1,
  firstName: "Abagail",
  lastName: "Podd"
}, {
  id: 2,
  firstName: "Ave"
}, {
  id: 3,
  firstName: "Tymothy"
}];

let columns = [
  {
    primaryKey: 'id'
  },
  {
    primaryKey: 'firstName'
  },
]

describe('SdsTableComponent', () => {
  let comp: SdsTableComponent;
  let fixture: ComponentFixture<SdsTableComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsTableComponent ],
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsTableComponent);
    comp = fixture.componentInstance;
    comp.columns = columns;
    comp.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should populate columnIds onInit', () => {
    expect(comp.columnIds.length).toEqual(columns.length)
  });

  it('should populate dataSource with MatTableDataSource objects onInit', () => {
    expect(comp.dataSource).toBeDefined();
    expect(comp.dataSource instanceof MatTableDataSource).toBeTruthy();
  });

  it('should disable sort if settings are undefined or settingss.sort is false', () => {
    expect(comp.sort.disabled).toEqual(true);
  });

  it('should set dataSource.sort to instance of child MatSort', () => {
    comp.settings = {
      sort: true
    }
    comp.ngOnInit();
    expect(comp.dataSource.sort).toEqual(comp.sort);
  });

});

@Component({
  template: `
    <ng-template #detailRow>
      <span>Test Expanded Component</span>
    </ng-template>
    <sds-table [data]="data" [columns]="columns" [detailRow]="detailRow"></sds-table>`
})

class WrapperComponent {
  @ViewChild(SdsTableComponent) tableComponentRef: SdsTableComponent;
  columns = columns;
  data = data;
}

describe('SdsTableComponent with expandable rows', () => {
  let comp: SdsTableComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        FontAwesomeModule,
        MatSortModule
      ],
      declarations: [ SdsTableComponent, WrapperComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    const wrapperComponent = fixture.debugElement.componentInstance;
    comp = wrapperComponent.tableComponentRef; // SdsTableComponent
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(comp).toBeDefined();
  });

  it('should add an additional column sdsExpandableRow if detailRow is set', () => {
    expect(comp.columnIds.length).toEqual(columns.length + 1)
  });

  it('should initially have no rows expanded', () => {
    expect(comp.expandedRow).toBeNull();
  });

  it('should set expanded row to clicked row when no row is expanded and null when clicked row is already expanded', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button');
    button[0].click();
    expect(comp.expandedRow).toEqual(comp.data[0]);
    button[0].click();
    expect(comp.expandedRow).toBeNull();
  });
});
