import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavigationLink, SideNavigationModel } from '../side-navigation/model/side-navigation-model';

@Component({
  selector: 'sds-selection-panel',
  templateUrl: './selection-panel.component.html',
  styleUrls: ['./selection-panel.component.scss'],
})
export class SdsSelectionPanelComponent implements OnChanges {

  @Input()
  model: SideNavigationModel;

  @Input() title: string;
  
  @Input() navigateOnClick = true;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  // list of items currently shown to user
  panelItemsOnDisplay: NavigationLink[];

  currentSelection: NavigationLink;

  mainParentOfCurrentSelection: NavigationLink;

  panelExpanded = true;

  isTopSection = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  onPanelItemClick(panelItem: NavigationLink) {
    this.currentSelection = panelItem;
    if (panelItem.children) {
      this.panelItemsOnDisplay = panelItem.children;
      this.isTopSection = false;
    }

    const parentLink = this.model.navigationLinks.find(link => link.id === panelItem.id);

    if (parentLink != null) {
      this.mainParentOfCurrentSelection = parentLink;
    }

    if (this.navigateOnClick) {
      const navigationExtras: NavigationExtras = {
        queryParams: panelItem.queryParams,
        relativeTo: this.activatedRoute
      }

      this.router.navigate(['.'], navigationExtras);
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
    this.isTopSection = true;
    $event.stopPropagation(); // Stop collapsible card from closing
  }

}
