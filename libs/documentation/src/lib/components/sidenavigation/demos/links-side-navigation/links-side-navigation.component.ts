import { Component, OnInit } from '@angular/core';
import { INavigationLink, SdsDialogConfig, SdsDialogRef, SideNavigationModel } from '@gsa-sam/components';
import { navigationConfig } from '../filter-side-navigation/navigation.config';

@Component({
  selector: 'links-side-navigation',
  templateUrl: './links-side-navigation.component.html'
})
export class LinksSideNavigationComponent implements OnInit {

  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Navigation Links',
  };

  isMobileMode: boolean;
  mobileDialog: SdsDialogRef<any>;

  public navigationModel: SideNavigationModel = navigationConfig;
  constructor() { }

  ngOnInit(): void {
  }

  onDialogOpen($event) {
    this.mobileDialog = $event;
  }
  onCancelClicked() {
    this.mobileDialog.close();
    this.mobileDialog = undefined;
  }

  onLinkClicked(event: INavigationLink): void {
    this.mobileDialog.close();
  }

}
