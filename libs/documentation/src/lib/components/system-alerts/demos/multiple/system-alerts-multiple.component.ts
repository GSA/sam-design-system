import { Component, OnInit } from '@angular/core';
import { Alert } from '@gsa-sam/layouts';

@Component({
  selector: 'sds-system-alerts-multiple-demo',
  templateUrl: './system-alerts-multiple.component.html',
})
export class SystemAlertsMultipleComponent {

    alerts: Alert[] = [
      {
        header: 'Alert Header',
        description: 'Alert Description',
        date: new Date()
      },
      {
        header: 'Alert Header 2',
        description: 'Alert 2 Description',
        date: new Date()
      },
      {
        header: 'Alert Header 3',
        description: 'Alert 3 Description',
        date: new Date()
      },
  ];

  onSeeAllAlerts() {
    console.log('See All Alerts Clicked');
  }

  onShowDetailsClicked(alert: Alert) {
    console.log('Show details for alert', alert);
  }
}
