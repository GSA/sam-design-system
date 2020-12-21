import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavigationLink, SideNavigationModel } from '../side-navigation/model/side-navigation-model';

@Component({
  selector: 'sds-selection-panel',
  templateUrl: './selection-panel.component.html',
  styleUrls: ['./selection-panel.component.scss'],
})
export class SdsSelectionPanelComponent implements OnChanges {

  @ViewChild('panelBody', { static: false }) panelBody: ElementRef;

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

    this.updateSubheader(panelItem);

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

    if (this.model && this.currentSelection) {
      this.updateSubheader(this.currentSelection);
    }
  }

  onMainPanelHeaderClicked($event: MouseEvent) {
    this.panelItemsOnDisplay = this.model.navigationLinks;
    this.currentSelection = this.mainParentOfCurrentSelection;
    this.isTopSection = true;

    $event.stopPropagation(); // Stop collapsible card from closing
  }

  private updateSubheader(panelItem: NavigationLink) {
    const parentLink = this.model.navigationLinks.find(link => link.id === panelItem.id);

    if (parentLink != null) {
      this.mainParentOfCurrentSelection = parentLink;
    }

  }

}
