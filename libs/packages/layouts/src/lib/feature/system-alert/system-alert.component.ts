import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from './model/alert.model';

@Component({
  selector: 'sds-system-alert',
  templateUrl: './system-alert.component.html',
  styleUrls: ['./system-alert.component.scss']
})
export class SystemAlertComponent {

  @Input() alerts: Alert[];
  
  @Output() seeAllAlerts = new EventEmitter();

  @Output() detailsClicked = new EventEmitter<any>();

  constructor() { }

  onAlertClose(index) {
    this.alerts.splice(index, 1);
  }

  onSeeAllAlertsClicked() {
    this.seeAllAlerts.emit();
  }

  onShowDetailsClicked(alert) {
    this.detailsClicked.emit(alert);
  }

  onToggleAlertsClicked(alertsContent: HTMLElement) {
    const isHidden = alertsContent.classList.contains('display-none');
    if (isHidden) {
      alertsContent.classList.remove('display-none');
    } else {
      alertsContent.classList.add('display-none');
    }
  }
}
