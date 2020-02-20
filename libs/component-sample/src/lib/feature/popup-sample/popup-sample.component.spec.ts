import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsPopupSampleComponent } from './popup-sample.component';

describe('SdsPopupSampleComponent', () => {
  let component: SdsPopupSampleComponent;
  let fixture: ComponentFixture<SdsPopupSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsPopupSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsPopupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
