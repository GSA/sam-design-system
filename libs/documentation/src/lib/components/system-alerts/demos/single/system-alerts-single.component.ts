import { Component, OnInit } from '@angular/core';
import { Alert } from '@gsa-sam/layouts';

@Component({
  selector: 'sds-system-alerts-single-demo',
  templateUrl: './system-alerts-single.component.html',
})
export class SystemAlertsSingleComponent {

  alerts: Alert[] = [
    {
      header: 'Alert Header',
      description: 'Alert Description',
      date: new Date()
    }
  ];

  onSeeAllAlerts() {
    console.log('See All Alerts Clicked');
  }

  onShowDetailsClicked(alert: Alert) {
    console.log('Show details for alert', alert);
  }

}
