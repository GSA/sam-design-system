import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavigationLink, SideNavigationModel } from '../../side-navigation/model/side-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';

@Component({
  selector: 'sds-selection-panel-navigation-mode',
  templateUrl: './navigation-mode.component.html',
  styleUrls: ['./navigation-mode.component.scss'],
})
export class SdsSelectionPanelNavigationModeComponent implements OnChanges {

  @Input() model: SelectionPanelModel;
  
  @Input() navigateOnClick = true;

  @Input() currentSelection: NavigationLink;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  onPanelItemClick(panelItem: NavigationLink) {
    this.currentSelection = panelItem;

    if (this.navigateOnClick) {
      this.navigateToSelectedItem(this.currentSelection);
    }

    this.panelSelected.emit(panelItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.model && this.currentSelection && changes.currentSelection) {
      if (this.navigateOnClick) {
        this.navigateToSelectedItem(this.currentSelection);
      }
    }
  }

  navigateToSelectedItem(selectedPanel: NavigationLink) {
    const navigationExtras: NavigationExtras = {
      queryParams: selectedPanel.queryParams,
      relativeTo: this.activatedRoute
    }

    this.router.navigate(['.'], navigationExtras);
  }

}
