import { Component } from '@angular/core';
import { NavigationLink, SelectionPanelModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './navigation.config';

@Component({
  templateUrl: './basic-selection-panel.component.html',
  selector: `sds-selection-panel-basic-demo`,
})
export class BasicSelectionPanelComponent {
  title = 'Basic Selection Panel';
  selectionPanelModel: SelectionPanelModel = selectionPanelConfig;

  constructor() {}

  onPanelSelection(panel: NavigationLink) {
    console.log(panel);
  }
}
