import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-tab-panel`,
  templateUrl: `./tab-panel.component.html`
})
export class TabPanelComponent {

  @Input() classes: string;
  @Input() id: string;
  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Input() tabHeader: string;
}
