import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSampleComponent } from './pagination-sample.component';

describe('PaginationSampleComponent', () => {
  let component: PaginationSampleComponent;
  let fixture: ComponentFixture<PaginationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
