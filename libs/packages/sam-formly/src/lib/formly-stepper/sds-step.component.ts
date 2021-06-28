import { DOCUMENT } from "@angular/common";
import { Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, QueryList, TemplateRef } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: `[sdsStepHeader]`,
  template: `<ng-content></ng-content>`
})
export class SdsStepHeaderComponent {}

@Component({
  selector: `[sdsStepFooter]`,
  template: '<ng-content></ng-content>'
})
export class SdsStepFooterComponent {}

let nextId = 0;

@Component({
  selector: `sds-step`,
  templateUrl: `./sds-step.component.html`
})
export class SdsStepComponent {
  @ContentChildren(SdsStepComponent) children: QueryList<SdsStepComponent>;

  @Input() stepTemplate: TemplateRef<any>;

  /**
   * Required when stepTemplate is defined - provides ways to check
   * if the custom template step is valid
   */
  @Input() stepValidationFn: (model: any, field?: FormlyFieldConfig) => boolean | void;

  @Input() text: string;

  @Input() id: string = `sds-step-${nextId++}`;

  @Input() selected = false;

  @Input() fieldConfig?: FormlyFieldConfig;

  @Input() options?: FormlyFormOptions; // Each step gets it's own options by default if not provided to determine whether to show error or not

  @Input() model?: any;

  @Input() valid?: boolean | void;

  @Input() hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  @Input() hide?: boolean;

  @Input() isReview?: boolean

  @Input() mode: NavigationMode;

  @Input() route?: string;

  @Input() disable?: boolean;

  @Output() modelChange = new EventEmitter<any>();

  constructor(
    private _el: ElementRef,
    @Inject(DOCUMENT) private _document
  ) {}

  /**
   * Dispatch a custom event for parent stepper component to listen for on model change
   * as well as an output binded event emitter for application level components to listen
   * for if they wanted to listen at individual step level
   * @param $event - the updated model
   */
  onModelChange($event) {
    let event: CustomEvent;
    if (typeof(Event) === 'function') {
      event = new CustomEvent('stepModelChange', {bubbles: true, detail: $event});
    } else {
      // IE11 support
      event = this._document.createEvent('CustomEvent');
      event.initCustomEvent('sort', true, true, $event);
    }

    this._el.nativeElement.dispatchEvent(event);

    this.modelChange.emit($event);
  }
}