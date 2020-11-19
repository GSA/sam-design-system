import { Component, EventEmitter, Inject, Input, Output, ViewChild } from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { sdsToolbarAnimations } from "./toolbar-animations";
import { SdsDialogRef } from '../dialog/dialog-ref';
import { SdsDialogService, SDS_DIALOG_DATA } from '../dialog/dialog';

/** Toolbar's states. */
export type SdsToolbarState = "expanded" | "collapsed";

/** Counter for generating unique element ids. */
let uniqueId = 0;

@Component({
  selector: "sds-toolbar",
  exportAs: "sdsToolbar",
  templateUrl: "toolbar.component.html",
  animations: [sdsToolbarAnimations.bodyExpansion],
  host: {
    class: "sds-toolbar",
    "[class.sds-toolbar--expanded]": "expanded"
  }
})
export class SdsToolbarComponent {

  /** The unique Toolbar id. */
  readonly id = uniqueId++;

  /** ID for the header element. Used for a11y labelling. */
  readonly _headerId: string = `sds-toolbar-header-${this.id}`;

  /** ID for the content element. Used for a11y labelling. */
  readonly _contentId: string = `sds-toolbar-content-${this.id}`;

  constructor() {}

  /** Emits whenever the expanded state of the toolbar changes. */
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Whether the toolbar is expanded. */
  @Input()
  get expanded(): any {
    return this._expanded;
  }
  set expanded(expanded: any) {
    expanded = coerceBooleanProperty(expanded);

    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
    }
  }
  private _expanded = false;

  /** Whether the toolbar is disabled. */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled: any) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  private _disabled: boolean = false;

  /** Width of the toolbar when is expanded. */
  @Input() expandedWidth: string = "300px";

  // Elements that surround the toolbar need to make space for the expanded toolbar.
  // Adding 20 more pixes to provide padding
  @Input() expandedSpace: string = "20px";

  /** Toggles the expanded state of the toolbar. */
  toggle() {
    this.expanded = !this.expanded;
  }

  /** Gets the expanded state string. */
  _getExpandedState(): SdsToolbarState {
    return this.expanded ? "expanded" : "collapsed";
  }
}
