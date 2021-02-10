import { Component, ContentChildren, Input, OnInit, QueryList } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";

/** CONSTANTS
 * Adding in the constant values for keycodes
 * to handle onKeyDown events
 */
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';

@Component({
  selector: `sds-tabs`,
  templateUrl: `./tabs.component.html`,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  @Input() defaultSelection: TabPanelComponent;

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  selectedPanel: TabPanelComponent;

  ngOnInit () {
    this.defaultSelection.selected = true;
    this.selectedPanel = this.defaultSelection;
  }
  
  onTabClicked(clickEvent: MouseEvent, tabPanel: TabPanelComponent) {
    this.changeSelectedTabPanel(tabPanel);
  }

  onKeyDown($event) {
    const tabPanelArray = this.tabPanels.toArray();
    let selectedTabIndex = tabPanelArray.findIndex(panel => panel.selected);

    switch($event.key) {
      case LEFT_ARROW:
        selectedTabIndex = selectedTabIndex == 0 ? this.tabPanels.length - 1 : (selectedTabIndex - 1) % this.tabPanels.length;
        break;
      case RIGHT_ARROW:
        selectedTabIndex = (selectedTabIndex + 1) % this.tabPanels.length;
        break;
    }

    const newTabPanel = tabPanelArray[selectedTabIndex]
    this.changeSelectedTabPanel(newTabPanel);

    // Move focus to newly selected panel
    $event.target.parentElement.children[selectedTabIndex].focus();
  }

  private changeSelectedTabPanel(newTabPanel: TabPanelComponent) {
    this.selectedPanel.selected = false;
    newTabPanel.selected = true;
    this.selectedPanel = newTabPanel;
  }
}