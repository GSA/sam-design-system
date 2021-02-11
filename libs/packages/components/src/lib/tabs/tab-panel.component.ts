import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-tab-panel`,
  templateUrl: `./tab-panel.component.html`
})
export class TabPanelComponent {

  /**
   * The associated id of this tab panel
   */
  @Input() id: string;

  /**
   * True if panel is currently selected.
   * Only one tabpanel should be selected at a time
   */
  @Input() selected: boolean;

  /**
   * Header text of the tabpanel
   */
  @Input() tabHeader: string;
}
