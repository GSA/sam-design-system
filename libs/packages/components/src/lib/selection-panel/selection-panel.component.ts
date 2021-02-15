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
  
  @Input() navigateOnClick = true;

  @Input() currentSelection: NavigationLink;

  @Output() panelSelected = new EventEmitter<NavigationLink>();

  // list of items currently shown to user
  panelItemsOnDisplay: NavigationLink[];


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
      this.panelBody.nativeElement.focus();
    }

    this.updateSubheader(panelItem, this.model.navigationLinks);

    if (this.navigateOnClick) {
      this.navigateToSelectedItem(this.currentSelection);
    }
    
    this.panelSelected.emit(panelItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.model) {
      this.panelItemsOnDisplay = this.model.navigationLinks;
    }

    if (this.model && this.currentSelection && changes.currentSelection) {
      this.updateSubheader(this.currentSelection, this.model.navigationLinks);
      if (this.navigateOnClick) {
        this.navigateToSelectedItem(this.currentSelection);
      }
    }
  }

  onMainPanelHeaderClicked($event: MouseEvent) {
    this.panelItemsOnDisplay = this.model.navigationLinks;
    this.currentSelection = this.mainParentOfCurrentSelection;
    this.isTopSection = true;

    if (this.navigateOnClick) {
      this.navigateToSelectedItem(this.currentSelection);
    }

    this.panelSelected.emit(this.currentSelection);

    $event.stopPropagation(); // Stop collapsible card from closing
  }

  private updateSubheader(selectedPanel: NavigationLink, allPanels: NavigationLink[], isTopSection = true, parentPanel?: NavigationLink) {
    allPanels.forEach(panel => {
      if (panel.id === selectedPanel.id) {
        this.panelItemsOnDisplay = panel.children ? panel.children : allPanels;
        this.mainParentOfCurrentSelection = panel.children && isTopSection ? panel : parentPanel;
        this.isTopSection = panel.children ? false : isTopSection;
        return;
      } else if (panel.children) {
        this.updateSubheader(selectedPanel, panel.children, false, parentPanel ? parentPanel : panel);
      }
    })
  }

  navigateToSelectedItem(selectedPanel: NavigationLink) {
    const navigationExtras: NavigationExtras = {
      queryParams: selectedPanel.queryParams,
      relativeTo: this.activatedRoute
    }

    this.router.navigate(['.'], navigationExtras);
  }

}
