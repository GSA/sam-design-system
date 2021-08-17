import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from './model/alert.model';

@Component({
  selector: 'sds-system-alert',
  templateUrl: './system-alert.component.html',
  styleUrls: ['./system-alert.component.scss']
})
export class SdsSystemAlertComponent {

  /** List of alerts to display. When the list contains only one item, the description of the alert will also
   * be displayed. Description text may contain html
   */
  @Input() alerts: Alert[];
  
  @Output() seeAllAlerts = new EventEmitter();

  @Output() detailsClicked = new EventEmitter<Alert>();

  @Output() alertDismiss = new EventEmitter<Alert>();

  constructor() { }

  /**
   * Removes the alert from input alerts array
   * @param index - index of the alert in array to remove
   */
  onAlertClose(index: number) {
    const dismissedAlert = this.alerts[index];
    this.alerts.splice(index, 1);
    this.alertDismiss.emit(dismissedAlert);
  }

  /**
   * Fired when 'See All Alerts' button is clicked. Emits the seeAllAlerts event
   */
  onSeeAllAlertsClicked() {
    this.seeAllAlerts.emit();
  }

  /**
   * Fired when 'Show Details' for an alert is clicked. Emits the detailsClicked event
   * with the alert whose 'Show Details' link was clicked and toggles description view for
   * the alert
   * @param alert 
   */
  onShowDetailsClicked(alert: Alert) {
    alert.displayDescription = !alert.displayDescription;
    this.detailsClicked.emit(alert);
  }

  /** On mobile view - hide/display list of alerts based on toggle button */
  onToggleAlertsClicked(alertsContent: HTMLElement) {
    const isHidden = alertsContent.classList.contains('display-none');
    if (isHidden) {
      alertsContent.classList.remove('display-none');
    } else {
      alertsContent.classList.add('display-none');
    }
  }
}
