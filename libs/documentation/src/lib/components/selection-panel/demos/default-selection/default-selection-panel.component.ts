import { Component } from "@angular/core";
import { SelectionPanelModel } from "@gsa-sam/components";
import { selectionPanelConfig } from './navigation.config'


@Component({
  selector: `sds-default-selection-panel-demo`,
  templateUrl: './default-selection-panel.component.html'
})
export class DefaultSelectionPanelComponent {

  title = 'Pre-Selected Selection Panel'
  selectionPanelModel: SelectionPanelModel = selectionPanelConfig;
  currentSelectedPanel = this.selectionPanelModel.navigationLinks[0]; // select `All Domains`

  /**
   * Update current selection panel programatically
   */
  onSelectExclusionsClicked() {
    this.currentSelectedPanel = {...this.selectionPanelModel.navigationLinks[1]};
  }
}
