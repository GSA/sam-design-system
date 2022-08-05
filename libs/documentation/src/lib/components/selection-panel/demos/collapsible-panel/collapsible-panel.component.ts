import { Component } from '@angular/core';
import { NavigationLink, SelectionPanelModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './navigation.config';

@Component({
  selector: `sds-selection-panel-collapsible-demo`,
  templateUrl: './collapsible-panel.component.html',
})
export class CollapsiblePanelComponent {
  selectionPanelModel: SelectionPanelModel = {
    navigationLinks: selectionPanelConfig.navigationLinks,
    selectionMode: 'SELECTION',
  };

  panelExpanded = true;

  selectedPanel: NavigationLink;

  onPanelSelected($event: NavigationLink) {
    this.selectedPanel = $event;
  }
}
