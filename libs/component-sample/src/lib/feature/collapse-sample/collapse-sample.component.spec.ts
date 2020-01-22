import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSampleComponent } from './collapse-sample.component';

describe('CollapseSampleComponent', () => {
  let component: CollapseSampleComponent;
  let fixture: ComponentFixture<CollapseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
