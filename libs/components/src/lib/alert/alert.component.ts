import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * The <sam-alert> component keeps users informed of important and (optionally)
 * time-sensitive changes
 */
@Component({
  selector: 'sam-alert',
  templateUrl: './alert.template.html'
})
export class SamAlertComponent {
  /**
   * Sets the alert type, defaults to 'success'
   */
  @Input() type: string;
  /**
   * Sets the alert title
   */
  @Input() title: string;
  /**
   * Sets the alert description
   */
  @Input() description: string;
  /**
   * Controls whether to display/hide the Close button
   */
  @Input() showClose: boolean = false;
  /**
   * Explicitly defines that the alert must be dismissed by the user. Overrides
   * the dismiss timer. Defaults to 'false'
   */
  @Input() userMustDismiss: boolean = false;
  /**
   * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
   * and is an infinite wait.
   */
  @Input() dismissTimer: number = 0;
  /**
   * Give a boolean value to display show/hide toggle
   */
  @Input() showMoreToggle = undefined;
  /**
   * Emitted event when an alert is dismissed
   */
  @Output() dismiss: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Emitted event when toggling content
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  types: any = {
    'error': { class: 'usa-alert-error', sr: 'error alert'},
    'info': { class: 'usa-alert-info', sr: 'info alert'},
    'success': { class: 'usa-alert-success', sr: 'success alert'},
    'warning': { class: 'usa-alert-warning', sr: 'warning alert'},
  };
  selectedType: string = this.types.success.class;
  showMoreLinkText = 'Show Details';

  public closeAlert() {
      this.onDismissClick();
   }

   public toggleContent() {
       this.showMoreToggle = !this.showMoreToggle;
       this.showMoreLinkText = this.showMoreToggle ?
         'Hide Details' :
         'Show Details';
       this.toggle.emit(this.showMoreToggle);
   }

  ngOnInit() {
    if (!this.typeNotDefined()) {
      this.selectedType = this.types[this.type].class;
    }
    if (this.dismissTimer > 0 && !this.userMustDismiss) {
      setTimeout(() => {
        this.dismiss.emit();
      }, this.dismissTimer);
    }
  }

  typeNotDefined() {
    if (!this.type || this.type.length === 0) {
      return true;
    }
    if (!this.types[this.type]) {
      return true;
    }
    return false;
  }

  private onDismissClick() {
    this.dismiss.emit();
  }
}
