import { AfterContentInit, AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from "@angular/core";
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
export class TabsComponent implements OnInit, AfterContentInit {

  /**
   * Default panel to display on initialization. If one is not provided, then the first panel
   * will be shown
   */
  @Input() defaultSelection: TabPanelComponent;

  /**
   * Emits an event whenever a tab is selected by the user containing the
   * TabPanelComponent
   */
  @Output() tabSelected: EventEmitter<TabPanelComponent> = new EventEmitter<TabPanelComponent>();

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  selectedPanel: TabPanelComponent;

  ngOnInit () {
    if (this.defaultSelection) {
      this.defaultSelection.selected = true;
      this.selectedPanel = this.defaultSelection;
    }
  }

  ngAfterContentInit() {
    if (!this.defaultSelection && this.tabPanels.first) {
      this.tabPanels.first.selected = true;
      this.selectedPanel = this.tabPanels.first;
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
    this.selectedPanel.selected = false;
    newTabPanel.selected = true;
    this.selectedPanel = newTabPanel;
    this.tabSelected.emit({...this.selectedPanel});
  }
}