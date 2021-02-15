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
   * Header content for the tab panel. May be a string or a template
   */
  @Input() tabHeader: string | TemplateRef<any>;

  /**
   * Aria label for tab header
   */
  @Input() ariaLabel: string;

  /**
   * Whether this tab panel is disabled for selection
   */
  @Input() disabled: boolean;

}
