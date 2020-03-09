import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlyerComponent } from './video-plyer.component';

describe('VideoPlyerComponent', () => {
  let component: VideoPlyerComponent;
  let fixture: ComponentFixture<VideoPlyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
