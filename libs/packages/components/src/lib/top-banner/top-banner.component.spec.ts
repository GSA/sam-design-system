/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsTopBannerComponent } from './top-banner.component';



describe('SdsTopBannerComponent', () => {
  let component: SdsTopBannerComponent;
  let fixture: ComponentFixture<SdsTopBannerComponent>;

  beforeEach(async(() => {
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

