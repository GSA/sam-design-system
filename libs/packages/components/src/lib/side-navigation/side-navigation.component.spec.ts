/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSideNavigationComponent } from './side-navigation.component';
import { SdsAccordionModule } from '../accordion/accordion.module';




describe('SdsSideNavigationComponent', () => {
  let component: SdsSideNavigationComponent;
  let fixture: ComponentFixture<SdsSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSideNavigationComponent],
      imports: [SdsAccordionModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSideNavigationComponent);
    component = fixture.componentInstance;
    component.model = { navigationLinks: [] };

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

