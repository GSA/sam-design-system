import { Directive, ElementRef, Input, Renderer2, OnInit } from "@angular/core";
import { SdsToolbarComponent } from "./toolbar.component";

@Directive({
  selector: "[sdsToolbarExpand]"
})
export class SdsToolbarExpandDirective implements OnInit {
  /** Width of the toolbar while expanded. */
  _expandedWidth: string;

  /** References the toolbar instance that the element its associated with. */
  @Input("sdsToolbarExpand")
  get toolbar() {
    return this._toolbar;
  }
  set toolbar(toolbar: SdsToolbarComponent) {
    if (toolbar === this._toolbar) {
      return;
    }
    this._toolbar = toolbar;
    /** Sets toolbar expanded width */

    this._expandedWidth = this._toolbar.expandedSpace;
  }
  private _toolbar: SdsToolbarComponent;

  constructor(private renderer: Renderer2, private _element: ElementRef) { }
  ngOnInit() {
    this.setStyle(this.toolbar.expanded);
    this.toolbar.expandedChange.subscribe(value => {
      this.setStyle(value);
    });
  }

  private setStyle(value: any) {
    if (value) {
      this.renderer.setStyle(this._element.nativeElement, "margin-left", `${this._expandedWidth}`);
    }
    else {
      this.renderer.removeStyle(this._element.nativeElement, "margin-left");
    }
  }
}
