import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsPopupComponent } from './popup.component';

describe('SdsPopupComponent', () => {
  let component: SdsPopupComponent;
  let fixture: ComponentFixture<SdsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
