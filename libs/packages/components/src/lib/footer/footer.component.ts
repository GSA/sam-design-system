import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterModel } from './model/FooterModel';
import { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';
import { NavigationHelper } from '../common-navigation/navigation-helper';

@Component({
  selector: 'sds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SdsFooterComponent {

  /**
   * Navigation helper
   */
  navigationHelper = new NavigationHelper();

  /**
   * Model used for the different display portions of the footer
   */
  @Input() model: FooterModel;
  @Input() isCollapsedContent: boolean = true;

  /**
   * event for event based
   */
  @Output()
  linkEvent = new EventEmitter<INavigationLink>();

  /**
   * Link clicked and emits the link data into an event
   * @param link
   */
  linkClickEvent(link: INavigationLink) {
    this.linkEvent.emit(link);
    return false;
  }
}
