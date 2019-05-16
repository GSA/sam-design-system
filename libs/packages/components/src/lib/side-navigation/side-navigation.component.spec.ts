/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSideNavigationComponent } from './side-navigation.component';
import { SdsAccordionModule } from '../accordion/accordion.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('SdsSideNavigationComponent', () => {
  let component: SdsSideNavigationComponent;
  let fixture: ComponentFixture<SdsSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSideNavigationComponent],
      imports: [RouterTestingModule, SdsAccordionModule, BrowserAnimationsModule]
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

