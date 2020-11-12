import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Event } from '@angular/router';
import { NavigationLink, SideNavigationModel } from '../side-navigation/model/side-navigation-model';

@Component({
  selector: 'sds-selection-panel',
  templateUrl: './selection-panel.component.html',
  styleUrls: ['./selection-panel.component.scss'],
})
export class SdsSelectionPanelComponent implements OnChanges {

  @Input()
  model: SideNavigationModel;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  // list of items currently shown to user
  panelItemsOnDisplay: NavigationLink[];

  currentSelection: NavigationLink;

  mainParentOfCurrentSelection: NavigationLink;

  panelExpanded = true;

  constructor() { }

  onPanelItemClick(panelItem: NavigationLink) {
    this.currentSelection = panelItem;
    if (panelItem.children) {
      this.panelItemsOnDisplay = panelItem.children;
    }

    const parentLink = this.model.navigationLinks.find(link => link.id === panelItem.id);

    if (parentLink != null) {
      this.mainParentOfCurrentSelection = parentLink;
    }

    this.panelSelected.emit(panelItem);
  }

  ngOnChanges() {
    if (this.model) {
      this.panelItemsOnDisplay = this.model.navigationLinks;
    }
  }

  onMainPanelHeaderClicked($event: MouseEvent) {
    this.panelItemsOnDisplay = this.model.navigationLinks;
    this.currentSelection = this.mainParentOfCurrentSelection;
    $event.stopPropagation();
  }

}
