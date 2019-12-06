/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import {FooterModel} from './footer-model';
import {INavigationLink, NavigationHelper} from '@gsa-sam/components/core';

@Component({
  selector: 'sds-footer',
  templateUrl: './footer.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsFooter {
  /** Navigation helper */
  navigationHelper = new NavigationHelper();

  /** Model used for the different display portions of the footer */
  @Input() model: FooterModel;

  /** Event for event based */
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
