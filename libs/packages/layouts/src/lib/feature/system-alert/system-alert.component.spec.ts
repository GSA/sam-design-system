import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsIconModule } from '@gsa-sam/components';

import { SdsSystemAlertComponent } from './system-alert.component';

describe('SystemAlertComponent', () => {
  let component: SdsSystemAlertComponent;
  let fixture: ComponentFixture<SdsSystemAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SdsIconModule,
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

});
