import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterModel } from './model/FooterModel';
import { INavigationLink, NavigationMode } from '../common-navigation-model/common-navigation-model';


@Component({
  selector: 'sds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SdsFooterComponent {

  /**
   * Model used for the different display portions of the footer
   */
  @Input() model: FooterModel;

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

  /**
   * checks if link is internal
   * @param link 
   */
  isLinkInternal(link: INavigationLink) {
    return link.mode === NavigationMode.INTERNAL;
  }

  /**
   * checks if link is external
   * @param link 
   */
  isLinkExternal(link: INavigationLink) {
    return link.mode === NavigationMode.EXTERNAL;
  }
}
