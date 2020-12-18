import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '../common-navigation/common-navigation-model';

import { SdsSelectionPanelComponent } from './selection-panel.component';

fdescribe('SelectionPanelComponent', () => {
  let component: SdsSelectionPanelComponent;
  let fixture: ComponentFixture<SdsSelectionPanelComponent>;

  const inputValues = {
    title: 'Select Domain',
    model: {
      navigationLinks: [
        {
          id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: '/documentation/layout', 
          children: [
            {
                id: 'assistancelist', mode: NavigationMode.INTERNAL,
                route: '/documentation/layout', queryParams: { 'index' : 'assistancelist'}, text: 'Assistance Listings'
            },
            {
                id: 'regionallocation', mode: NavigationMode.INTERNAL,
                route: '/documentation/layout', text: 'Regional Locations'
            }
          ]
        }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsSelectionPanelComponent ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSelectionPanelComponent);
    component = fixture.componentInstance;
    component.title = inputValues.title;
    component.model = inputValues.model;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Display children items if selected item contains children', () => {
    component.navigateOnClick = false;
    const federalAssistanceDomain = fixture.debugElement.query(By.css('a'));
    federalAssistanceDomain.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.mainParentOfCurrentSelection).toEqual(inputValues.model.navigationLinks[0]);
    expect(component.panelItemsOnDisplay).toEqual(inputValues.model.navigationLinks[0].children);
  });

  it('Should display parent section if sub header is clicked', () => {
    component.navigateOnClick = false;
    const federalAssistanceDomain = fixture.debugElement.query(By.css('a'));
    federalAssistanceDomain.triggerEventHandler('click', null);
    fixture.detectChanges();

    const subTitle = fixture.debugElement.query(By.css('.sds-card__subtitle'));
    subTitle.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.mainParentOfCurrentSelection).toEqual(inputValues.model.navigationLinks[0]);
    expect(component.panelItemsOnDisplay).toEqual(inputValues.model.navigationLinks);
  })

});
