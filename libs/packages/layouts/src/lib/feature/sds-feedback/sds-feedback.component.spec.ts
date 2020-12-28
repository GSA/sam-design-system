import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsFeedbackComponent } from './sds-feedback.component';

describe('SdsFeedbackComponent', () => {
  let component: SdsFeedbackComponent;
  let fixture: ComponentFixture<SdsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
