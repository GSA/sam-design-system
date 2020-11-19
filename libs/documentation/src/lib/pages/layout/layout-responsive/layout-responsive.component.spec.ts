import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutResponsiveComponent } from './layout-responsive.component';

describe('LayoutResponsiveComponent', () => {
  let component: LayoutResponsiveComponent;
  let fixture: ComponentFixture<LayoutResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
