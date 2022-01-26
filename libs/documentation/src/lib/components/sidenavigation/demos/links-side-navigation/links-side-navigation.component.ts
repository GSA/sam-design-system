import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SdsDialogConfig, SideNavigationModel, SdsSideNavigationComponent } from '@gsa-sam/components';
import { navigationConfig } from '../filter-side-navigation/navigation.config';

@Component({
  selector: 'links-side-navigation',
  templateUrl: './links-side-navigation.component.html'
})
export class LinksSideNavigationComponent implements AfterViewInit {

  @ViewChild('sideNavigation') sideNavigation: SdsSideNavigationComponent;

  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Navigation Links',
  };

  public navigationModel: SideNavigationModel = navigationConfig;

  ngAfterViewInit() {
    // Pre-select first sidenav item
    this.sideNavigation.select(navigationConfig.navigationLinks[0].id);
  }

  onSideNavItemClicked($event) {
    this.sideNavigation.select($event.id);
  }

}
