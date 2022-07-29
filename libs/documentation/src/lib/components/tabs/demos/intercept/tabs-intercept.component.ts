import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  templateUrl: './tabs-intercept.component.html',
  selector: `sds-tabs-intercept-demo`,
})
export class TabsInterceptComponent {
  selectedTab: TabPanelComponent;

  selectTab(tab: TabPanelComponent) {
    this.selectedTab = tab;
  }
  handlePreTabCheck(destinationTab: TabPanelComponent) {
    console.log('pretab change', destinationTab);
    const tabToGoTo: TabPanelComponent = destinationTab;
    const response = confirm('Proceed?');
    if (response == true) {
      this.selectedTab = tabToGoTo;
    }
  }
}
