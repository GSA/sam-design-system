import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsDialogModule, SdsDialogService } from '@gsa-sam/components';

import { SideToolbarComponent } from './side-toolbar.component';

describe('SideToolbarComponent', () => {
  let component: SideToolbarComponent;
  let fixture: ComponentFixture<SideToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SdsDialogModule,
      ],
      declarations: [ SideToolbarComponent ],
      providers: [
        SdsDialogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display advanced search button when mobile view is enabled', () => {
    let responsiveViewButton = fixture.debugElement.query(By.css('#responsiveViewButton'));
    expect(responsiveViewButton).toBeNull();

    component.isResponsiveView = true;
    fixture.detectChanges();

    responsiveViewButton = fixture.debugElement.query(By.css('#responsiveViewButton'));
    expect(responsiveViewButton).toBeDefined();
  });
});
