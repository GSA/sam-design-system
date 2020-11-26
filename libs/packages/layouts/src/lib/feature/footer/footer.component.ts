import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostListener
} from '@angular/core';
import { FooterModel } from './model/FooterModel';
import { INavigationLink } from '@gsa-sam/components';
import { NavigationHelper } from '@gsa-sam/components';
import { FormControl } from '@angular/forms';

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
  @Input() isCollapsedContent = true;
  @Input() feedbackModel: FormControl = new FormControl('');

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

  onFeedbackSubmitClicked() {
    this.feedbackSubmit.emit(this.feedbackModel.value);
  }
}
