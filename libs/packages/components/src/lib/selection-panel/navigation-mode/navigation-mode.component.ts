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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.model && this.currentSelection && changes.currentSelection) {
      this.selectPanel(this.currentSelection);

      if (this.navigateOnClick) {
        this.navigateToSelectedItem(this.currentSelection);
      }
    }
  }

  onPanelItemClick(panelItem: NavigationLink) {
    this.selectPanel(panelItem);
    this.currentSelection = panelItem;

    if (this.navigateOnClick) {
      this.navigateToSelectedItem(panelItem);
    }

    this.panelSelected.emit(panelItem);
  }

  navigateToSelectedItem(selectedPanel: NavigationLink) {
    const navigationExtras: NavigationExtras = {
      queryParams: selectedPanel.queryParams,
      relativeTo: this.activatedRoute,
    };

    this.router.navigateByUrl(selectedPanel.route, navigationExtras);
  }

  /** Public interface to select panel item */
  public selectPanel(panelItem: NavigationLink) {
    this.deselectSideNav(this.model.navigationLinks);
    this.selectSideNav(panelItem, this.model.navigationLinks);
  }

  /**
   * Deselects any previously selected sidenav item
   * @param sidenavItems
   */
  private deselectSideNav(sidenavItems: NavigationLink[]): void {
    sidenavItems.forEach((sideNavItem) => {
      if (sideNavItem.children) {
        this.deselectSideNav(sideNavItem.children);
      }
      sideNavItem.selected = false;
    });
  }

  /**
   * Selects the clicked sidenav item as we as any parent
   * @param selectedItem
   * @param allNavItems
   */
  private selectSideNav(selectedItem: NavigationLink, allNavItems: NavigationLink[]): boolean {
    for (const item of allNavItems) {
      if (item === selectedItem) {
        item.selected = true;
        return true;
      } else if (item.children) {
        const isChildSelected = this.selectSideNav(selectedItem, item.children);
        if (isChildSelected) {
          item.selected = true;
          return true;
        }
      }
    }
    return false;
  }
}
