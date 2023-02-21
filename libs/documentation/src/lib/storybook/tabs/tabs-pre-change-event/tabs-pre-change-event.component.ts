import { Component } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-tabs-pre-change-event',
  templateUrl: './tabs-pre-change-event.component.html',
  styleUrls: ['./tabs-pre-change-event.component.scss']
})
export class TabsPreChangeEventComponent {
  selectedTab: TabPanelComponent;

  constructor() {}

  handlePreTabChange(destinationTab: TabPanelComponent) {
    console.log('preTabChange object:', destinationTab);
    this.selectedTab = destinationTab;
  }
}
