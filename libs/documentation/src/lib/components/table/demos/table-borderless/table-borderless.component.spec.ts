import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBorderlessComponent } from './table-borderless.component';

describe('TableBorderlessComponent', () => {
  let component: TableBorderlessComponent;
  let fixture: ComponentFixture<TableBorderlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBorderlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBorderlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
