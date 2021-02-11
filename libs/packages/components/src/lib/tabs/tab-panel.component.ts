import { Component, Input, TemplateRef } from "@angular/core";

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
  @Input() tabTextHeader: string;

  /**
   * Header template of the tabpanel. Will take precendance over tabTextHeader
   */
  @Input() tabTemplateHeader: TemplateRef<any>;

  /**
   * Aria label for tab header
   */
  @Input() ariaLabel: string;
}
