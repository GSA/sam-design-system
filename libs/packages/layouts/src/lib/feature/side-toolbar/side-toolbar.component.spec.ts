import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SdsDialogModule, SdsDialogService } from '@gsa-sam/components';

import { SideToolbarComponent } from './side-toolbar.component';

describe('SideToolbarComponent', () => {
  let component: SideToolbarComponent;
  let fixture: ComponentFixture<SideToolbarComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

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
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);

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
    let mobileViewButton = fixture.debugElement.query(By.css('#mobileViewButton'));
    expect(mobileViewButton).toBeNull();

    component.isMobileView = true;
    fixture.detectChanges();

    mobileViewButton = fixture.debugElement.query(By.css('#mobileViewButton'));
    expect(mobileViewButton).toBeDefined();
  });
});
