import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NavigationLink,
  SideNavigationModel,
} from '../..//side-navigation/model/side-navigation-model';

@Component({
  selector: 'sds-selection-panel-selection-mode',
  templateUrl: './selection-mode.component.html',
  styleUrls: ['./selection-mode.component.scss'],
})
export class SdsSelectionPanelSelectionModeComponent {
  @Input()
  model: SideNavigationModel;

  @Input() currentSelection: NavigationLink;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  onPanelItemClick(panelItem: NavigationLink) {
    this.currentSelection = panelItem;
    this.panelSelected.emit(panelItem);
  }
}
