import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationLink, SideNavigationModel } from '../../side-navigation/model/side-navigation-model';

@Component({
    selector: `sds-sub-panel`,
    templateUrl: './sub-panel.component.html',
    standalone: false
})
export class SdsSubPanelComponent {
  @Input() model: NavigationLink[];

  @Input() currentSelection: NavigationLink;

  @Output() subPanelClicked = new EventEmitter<NavigationLink>();

  onSubPanelItemClicked(item: NavigationLink) {
    this.currentSelection = item;
    this.subPanelClicked.emit(item);
  }
}
