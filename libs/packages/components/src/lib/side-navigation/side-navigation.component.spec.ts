/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSideNavigationComponent } from './side-navigation.component';



describe('SdsSideNavigationComponent', () => {
  let component: SdsSideNavigationComponent;
  let fixture: ComponentFixture<SdsSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSideNavigationComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSideNavigationComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

