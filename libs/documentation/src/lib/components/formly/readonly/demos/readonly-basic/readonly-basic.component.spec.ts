import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyBasicComponent } from './readonly-basic.component';

describe('ReadonlyBasicComponent', () => {
  let component: ReadonlyBasicComponent;
  let fixture: ComponentFixture<ReadonlyBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
