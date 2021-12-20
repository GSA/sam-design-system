import { Component } from '@angular/core';
import { SdsDialogConfig, SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from '../filter-side-navigation/navigation.config';

@Component({
  selector: 'links-side-navigation',
  templateUrl: './links-side-navigation.component.html'
})
export class LinksSideNavigationComponent {

  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Navigation Links',
  };

  public navigationModel: SideNavigationModel = navigationConfig;

}
