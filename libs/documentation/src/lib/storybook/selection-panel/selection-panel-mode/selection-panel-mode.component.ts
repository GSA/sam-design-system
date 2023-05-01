import { Component } from '@angular/core';
import { SelectionPanelModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './selection-panel-mode.config';

@Component({
  selector: 'sds-selection-panel-mode',
  templateUrl: './selection-panel-mode.component.html',
})
export class SelectionPanelModeComponent {
  selectionPanelModel: SelectionPanelModel = selectionPanelConfig;

  constructor() {}
}
