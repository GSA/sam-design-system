import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerComponent } from './top-banner.component';

describe('TopBannerComponent', () => {
  let component: TopBannerComponent;
  let fixture: ComponentFixture<TopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
