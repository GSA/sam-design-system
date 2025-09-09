import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
	standalone: false,
  selector: 'sds-tabs-selected-tab',
  templateUrl: './tabs-selected-tab.component.html',
  styleUrls: ['./tabs-selected-tab.component.scss'],
})
export class TabsSelectedTabComponent {
  selectedTab: TabPanelComponent;

  selectTab(tab: TabPanelComponent) {
    this.selectedTab = tab;
  }
}
