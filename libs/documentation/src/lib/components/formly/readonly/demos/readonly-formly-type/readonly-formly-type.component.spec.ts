import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyFormlyTypeComponent } from './readonly-formly-type.component';

describe('ReadonlyFormlyTypeComponent', () => {
  let component: ReadonlyFormlyTypeComponent;
  let fixture: ComponentFixture<ReadonlyFormlyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyFormlyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyFormlyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
