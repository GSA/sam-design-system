import { Component } from "@angular/core";
import { TabPanelComponent } from "@gsa-sam/components";


@Component({
  selector: `sds-tabs-disabled-demo`,
  templateUrl: './tabs-disabled.component.html'
})
export class TabsDisabledComponent {

  toggleTab(tab: TabPanelComponent) {
    tab.disabled = !tab.disabled
  }
}