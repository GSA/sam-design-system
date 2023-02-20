import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-tabs-selected-tab',
  templateUrl: './tabs-selected-tab.component.html',
})
export class TabsSelectedTabComponent {
  selectedTab: TabPanelComponent;

  selectTab(tab: TabPanelComponent) {
    this.selectedTab = tab;
  }
}
