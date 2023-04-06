import { Component } from '@angular/core';
import { SelectionPanelModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './selection-panel-selected.config';

@Component({
  selector: 'sds-selection-panel-selected',
  templateUrl: './selection-panel-selected.component.html',
})
export class SelectionPanelSelectedComponent {
  selectionPanelModel: SelectionPanelModel = selectionPanelConfig;

  constructor() {}
}
