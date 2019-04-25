import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSampleComponent } from './header-sample.component';

describe('HeaderSampleComponent', () => {
  let component: HeaderSampleComponent;
  let fixture: ComponentFixture<HeaderSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
