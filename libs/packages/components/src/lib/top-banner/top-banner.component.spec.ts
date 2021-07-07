/* tslint:disable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SdsTopBannerComponent } from './top-banner.component';



describe('SdsTopBannerComponent', () => {
  let component: SdsTopBannerComponent;
  let fixture: ComponentFixture<SdsTopBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SdsTopBannerComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsTopBannerComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

