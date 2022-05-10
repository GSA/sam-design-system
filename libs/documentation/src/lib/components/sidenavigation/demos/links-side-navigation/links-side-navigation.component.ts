import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { SdsDialogConfig, SideNavigationModel, SdsSideNavigationComponent, SdsDialogRef } from '@gsa-sam/components';
import { navigationConfig } from '../filter-side-navigation/navigation.config';

@Component({
  selector: 'links-side-navigation',
  templateUrl: './links-side-navigation.component.html',
})
export class LinksSideNavigationComponent implements AfterViewInit {
  @ViewChild('sideNavigation') sideNavigation: SdsSideNavigationComponent;

  responsiveDialogOptions: SdsDialogConfig = {
    ariaLabel: 'Navigation Links',
  };

  public navigationModel: SideNavigationModel = navigationConfig;

  /**
   * Pre-select first sidenav item if sidenav is defined during initialization phase.
   * We do AfterViewInit rather than OnInit because non-static view child references
   * are not defined until AfterViewInit
   * On mobile view, due to sds-side-toolbar, the sidenav does not exist until user
   * opens the sidenav through modal. See onSidenavDialogOpen for listening for the
   * modal to popup and pre-selecting a sidenav link
   */
  ngAfterViewInit() {
    if (!this.sideNavigation) return;
    this.sideNavigation.select(navigationConfig.navigationLinks[0].id);
  }

  onSideNavItemClicked($event) {
    this.sideNavigation.select($event.id);
  }

  /**
   * Execute event after user clicks to open sidenav dialog in mobile view
   * On mobile view, sidenav will only be defined after user chooses to open the dialog.
   *  We listen for that dialog open event,
   * @param $event
   */
  onSidenavDialogOpen($event: SdsDialogRef<TemplateRef<any>>) {
    /**
     * We need to wait for dialog to finish opening before we can reference components
     * inside the dialog
     * */

    $event
      .afterOpened()
      .toPromise()
      .then(() => {
        // Once the sidenav is completely initialized, select the first item
        this.sideNavigation.select(navigationConfig.navigationLinks[0].id);
      });
  }
}
