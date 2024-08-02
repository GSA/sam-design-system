import { Component } from '@angular/core';
import { NavigationLink, SelectionPanelModel } from '@gsa-sam/components';
import { navigationConfig } from './side-navigation-selection.config';

@Component({
  selector: 'sds-side-navigation-selection',
  templateUrl: './side-navigation-selection.component.html',
})
export class SideNavigationSelectionComponent {
  public navigationModel: SelectionPanelModel = {
    navigationLinks: navigationConfig.navigationLinks,
    selectionMode: 'SELECTION',
  };
  selectedPanel: NavigationLink = this.navigationModel.navigationLinks[1];

  onPanelSelection($event: NavigationLink) {
    this.selectedPanel = $event;
    console.log('Selected Domain', $event);
  }
}
