import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyHeaderComponent } from './table-sticky-header.component';

describe('TableStickyHeaderComponent', () => {
  let component: TableStickyHeaderComponent;
  let fixture: ComponentFixture<TableStickyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStickyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
