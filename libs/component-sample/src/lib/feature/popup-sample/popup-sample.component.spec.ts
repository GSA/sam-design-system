import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSampleComponent } from './popup-sample.component';

describe('PopupSampleComponent', () => {
  let component: PopupSampleComponent;
  let fixture: ComponentFixture<PopupSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
