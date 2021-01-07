import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FooterModel } from './model/FooterModel';
import { INavigationLink } from '@gsa-sam/components';
import { NavigationHelper } from '@gsa-sam/components';

@Component({
  selector: 'sds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SdsFooterComponent {
  public innerWidth: any;
  public expandedIndex: number;

  /**
   * Navigation helper
   */
  navigationHelper = new NavigationHelper();

  /**
   * Model used for the different display portions of the footer
   */
  @Input() model: FooterModel;
  @Input() feedbackTemplate: TemplateRef<any>;
  
  /**
   * event for event based
   */
  @Output()
  linkEvent = new EventEmitter<INavigationLink>();

  @Output()
  feedbackSubmit = new EventEmitter<string>();

  /**
   * Link clicked and emits the link data into an event
   * @param link
   */
  linkClickEvent(link: INavigationLink) {
    this.linkEvent.emit(link);
    return false;
  }

  onFeedbackSubmitClicked(feedback: string) {
    this.feedbackSubmit.emit(feedback);
  }
}
