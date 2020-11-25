import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAlertComponent } from './system-alert.component';

describe('SystemAlertComponent', () => {
  let component: SystemAlertComponent;
  let fixture: ComponentFixture<SystemAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
