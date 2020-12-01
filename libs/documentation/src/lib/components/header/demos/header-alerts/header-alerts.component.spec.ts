import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlertsComponent } from './header-alerts.component';

describe('HeaderAlertsComponent', () => {
  let component: HeaderAlertsComponent;
  let fixture: ComponentFixture<HeaderAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
