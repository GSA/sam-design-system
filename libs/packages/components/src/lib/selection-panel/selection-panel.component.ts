import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavigationLink, SideNavigationModel } from '../side-navigation/model/side-navigation-model';

@Component({
  selector: 'sds-selection-panel',
  templateUrl: './selection-panel.component.html',
  styleUrls: ['./selection-panel.component.scss'],
})
export class SdsSelectionPanelComponent implements OnChanges {

  @ViewChild('startOfPanelBody') panelBody: ElementRef;

  @Input()
  model: SideNavigationModel;

  @Input() title: string;
  
  @Input() navigateOnClick = false;

  @Input() currentSelection: NavigationLink;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  // list of items currently shown to user
  panelItemsOnDisplay: NavigationLink[];

  subPanels: NavigationLink[];

  mainParentOfCurrentSelection: NavigationLink;

  panelExpanded = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  onPanelItemClick(panelItem: NavigationLink) {
    this.currentSelection = panelItem;

    this.subPanels = panelItem.children;

    if (this.navigateOnClick) {
      this.navigateToSelectedItem(this.currentSelection);
    }
    
    this.panelExpanded = false;
    this.panelSelected.emit(panelItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.model) {
      this.panelItemsOnDisplay = this.model.navigationLinks;
    }

    if (this.model && this.currentSelection && changes.currentSelection) {
      this.subPanels = this.currentSelection.children;
      this.panelExpanded = false;
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
