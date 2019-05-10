import { Component, Host } from "@angular/core";
import { SdsToolbarComponent } from "./toolbar.component";

@Component({
  selector: "sds-toolbar-header",
  templateUrl: "toolbar-header.component.html",
  host: {
    class: "sds-toolbar__header"
  }
})
export class SdsToolbarHeaderComponent {
  constructor(@Host() public toolbar: SdsToolbarComponent) {}

  /** Toggles the expanded state of the toolbar. */
  _toggle() {
    this.toolbar.toggle();
  }

  /** Gets whether the toolbar is expanded. */
  get _isExpanded(): boolean {
    return this.toolbar.expanded;
  }

  /** Whether the toolbar is disabled. */
  get _disabled(): boolean {
    return this.toolbar.disabled;
  }
}
