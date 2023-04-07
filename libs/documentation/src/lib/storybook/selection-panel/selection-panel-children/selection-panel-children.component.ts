import { Component } from '@angular/core';
import { SelectionPanelModel } from '@gsa-sam/components';
import { selectionPanelConfig } from './selection-panel-children.config';

@Component({
  selector: 'sds-selection-panel-children',
  templateUrl: './selection-panel-children.component.html',
})
export class SelectionPanelChildrenComponent {
  selectionPanelModel: SelectionPanelModel = selectionPanelConfig;

  constructor() {}
}
