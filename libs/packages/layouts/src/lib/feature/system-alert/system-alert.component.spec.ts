import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsCollapseModule } from '@gsa-sam/components';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons'

import { SdsSystemAlertComponent } from './system-alert.component';

describe('SystemAlertComponent', () => {
  let component: SdsSystemAlertComponent;
  let fixture: ComponentFixture<SdsSystemAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IconModule,
        SdsCollapseModule,
        NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))
      ],
      declarations: [ SdsSystemAlertComponent, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSystemAlertComponent);
    component = fixture.componentInstance;
    component.alerts = [
      {
        header: 'Test Alert',
        date: new Date(),
        description: 'Test Alert description'
      },
      {
        header: 'New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert New Alert ',
        date: new Date(),
        description: 'New Alert Description'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Should remove an alert after the alert\'s close button is clicked', () => {
    const testAlertCloseButton = fixture.debugElement.query(By.css('#alert0CloseBtn'));
    testAlertCloseButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.alerts.length).toEqual(1);
  });

  it('Should emit event when see all alerts is clicked', () => {
    const seeAllAlertsSpy = spyOn(component.seeAllAlerts, 'emit');
    const seeAllAlertsBtn = fixture.debugElement.query(By.css('#seeAllAlertsTabletBtn'));
    seeAllAlertsBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(seeAllAlertsSpy).toHaveBeenCalled();
  });

  it('Should display/hide alert description when show details is clicked', () => {
    const showDetailsButton = fixture.debugElement.query(By.css('.sds-alert--header__content .sds-alert--header__link'));

    let alertDescription = fixture.debugElement.query(By.css('#alertDescription0'));

    // ensure description is initially not present
    expect(alertDescription.classes['display-none']).toEqual(true);

    // Show details clicked - description should be present
    showDetailsButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(alertDescription.classes['display-none']).toBeFalsy();

    // Hide details clicked - description should be hidden again
    showDetailsButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(alertDescription.classes['display-none']).toEqual(true);


  });
});
