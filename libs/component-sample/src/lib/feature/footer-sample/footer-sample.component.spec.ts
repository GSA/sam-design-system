import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSampleComponent } from './footer-sample.component';

describe('FooterSampleComponent', () => {
  let component: FooterSampleComponent;
  let fixture: ComponentFixture<FooterSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
