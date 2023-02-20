import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-tabs-custom-header',
  templateUrl: './tabs-custom-header.component.html',
})
export class TabsCustomHeaderComponent {
  selectedTab: TabPanelComponent;

  constructor() {}
}
