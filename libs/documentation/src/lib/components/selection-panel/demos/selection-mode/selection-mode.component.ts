import { Component } from "@angular/core";
import { SelectionPanelModel } from "@gsa-sam/components";
import { selectionPanelConfig } from './navigation.config'


@Component({
  selector: `sds-selection-mode-panel-demo`,
  templateUrl: './selection-mode.component.html'
})
export class SelectionModeComponent {

  selectionPanelModel: SelectionPanelModel = {
    navigationLinks: selectionPanelConfig.navigationLinks,
    selectionMode: 'SELECTION'
  };
}
