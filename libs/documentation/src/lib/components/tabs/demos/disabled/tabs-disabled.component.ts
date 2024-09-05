import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: `sds-tabs-disabled-demo-123`,
  templateUrl: './tabs-disabled.component.html',
})
export class OldTabsDisabledComponent {
  toggleTab(tab: TabPanelComponent) {
    tab.disabled = !tab.disabled;
  }
}
