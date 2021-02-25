import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationLink } from '../../side-navigation/model/side-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';

@Component({
  selector: 'sds-selection-panel',
  templateUrl: './selection-panel.component.html',
})
export class SdsSelectionPanelComponent {

  /**
   * Model containing navigation links as well as a selection mode property.
   * Navigation mode is implied if no selection mode is passed in
   */
  @Input() model: SelectionPanelModel;
  
  /**
   * True if users would prefer to navigate on panel selection, false otherwise.
   * Navigation feature is not supported on SELECTION mode. On NAVIGATION mode,
   * this is enabled by default
   */
  @Input() navigateOnClick: boolean;

  /**
   * Allows users to programatically select panel item. Can also be used
   * to select initial panel
   */
  @Input() currentSelection: NavigationLink;

  /**
   * Outputs a NavigationLink item when it is selected from the panel
   */
  @Output() panelSelected = new EventEmitter<NavigationLink>();
}
