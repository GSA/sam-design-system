import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsDialogModule, SdsDialogService, SdsSelectionPanelModule } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SideToolbarDialogModule } from '../side-toolbar-dialog/side-toolbar-dialog.module';
import { FilterPanelConfig } from './model/side-toolbar.model';

import { SideToolbarComponent } from './side-toolbar.component';

describe('SideToolbarComponent', () => {
  let component: SideToolbarComponent;
  let fixture: ComponentFixture<SideToolbarComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SdsFiltersModule, 
        SdsSelectionPanelModule,
        SdsDialogModule,
        SideToolbarDialogModule,
        RouterTestingModule,
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

  it('Should perform route navigation on filter selection', () => {
    component.filterPanelConfig = {
      isHistoryEnabled: true
    } as FilterPanelConfig;

    component.filterPanelConfig.isHistoryEnabled = true;
    const routeSpy = spyOn(router, 'navigate');
    component.onFilterChange([{keyword: 'untiTest'}]);
    expect(routeSpy).toHaveBeenCalled();
  });

  it('Should display advanced search button when mobile view is enabled', () => {
    let advancedSearchButton = fixture.debugElement.query(By.css('#advancedSearchButton'));
    expect(advancedSearchButton).toBeNull();

    component.isMobileSize = true;
    fixture.detectChanges();

    advancedSearchButton = fixture.debugElement.query(By.css('#advancedSearchButton'));
    expect(advancedSearchButton).toBeDefined();
  });

  it('Should properly create query params on filter change', () => {
    component.filterPanelConfig = {
      isHistoryEnabled: true
    } as FilterPanelConfig;

    const routeSpy = spyOn(router, 'navigate');

    component.onFilterChange([{keyword: 'unitTest'}]);

    const expectedNavigationParams: NavigationExtras = {
      relativeTo: activatedRoute,
      queryParams: {
        'sfm[0][keyword]': 'unitTest'
      }
    };

    expect(routeSpy).toHaveBeenCalledWith(['.'], expectedNavigationParams);
  });
});
