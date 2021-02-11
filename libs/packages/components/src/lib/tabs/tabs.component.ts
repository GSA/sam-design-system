import { AfterContentInit, AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges } from "@angular/core";
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
export class TabsComponent implements OnInit, OnChanges, AfterContentInit {

  /**
   * Currently selected tab for display.
   */
  @Input() 
  selectedTab: TabPanelComponent;

  /**
   * Emits an event whenever a tab is selected by the user containing the selected
   * TabPanelComponent. Please note that because this output contains `Change` suffix
   * to the `tabSelected` input, users can 2-way bind to the `selectedTab` input
   */
  @Output()
  selectedTabChange: EventEmitter<TabPanelComponent> = new EventEmitter<TabPanelComponent>();

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;


  ngOnInit () {
    if (this.selectedTab) {
      this.selectedTab.selected = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTab && changes.selectedTab.currentValue) {
      this.tabPanels.forEach(tab => tab.selected = false);
      changes.selectedTab.currentValue.selected = true;
    }
  }

  ngAfterContentInit() {
    if (!this.selectedTab) {
      this.tabPanels.first.selected = true;
      this.selectedTab = this.tabPanels.first;
    }
  }
  
  onTabClicked(clickEvent: MouseEvent, tabPanel: TabPanelComponent) {
    this.changeSelectedTabPanel(tabPanel);
  }

  /**
   * Looks for Left and Right arrow presses and moves selected tab accordingly.
   * @param $event - Keyboard Event
   */
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
    this.selectedTab.selected = false;
    newTabPanel.selected = true;
    this.selectedTab = newTabPanel;
    this.selectedTabChange.emit(this.selectedTab);
  }
}