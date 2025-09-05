import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
    templateUrl: './tabs-basic.component.html',
    selector: `sds-tabs-basic-demo`,
    standalone: false
})
export class TabsBasicComponent {
  selectedTab: TabPanelComponent;

  selectTab(tab: TabPanelComponent) {
    this.selectedTab = tab;
  }
}
