import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-tabs-configurable',
  templateUrl: './tabs-configurable.component.html',
  styleUrls: ['./tabs-configurable.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsConfigurableComponent {
  @ViewChild('tab1')
  tab1: TabPanelComponent;

  @ViewChild('tab2')
  tab2: TabPanelComponent;

  _selectedTab: TabPanelComponent;

  @Input()
  set selectedTab(tab: string) {
    switch (tab) {
      case 'Tab 1':
        this._selectedTab = this.tab1;
        break;
      case 'Tab 2':
        this._selectedTab = this.tab2;
        break;
    }
  }

  @Input()
  automaticActivation: boolean;

  @Input()
  tabClass: string = 'sds-tabs--default';

  @Input()
  interceptTabChange: boolean;

  handlePreTabCheck(destinationTab: TabPanelComponent) {
    if (this.interceptTabChange) {
      const response = confirm('Proceed?');
      if (response == true) {
        this._selectedTab = destinationTab;
      }
    }
  }

  constructor() {}
}
