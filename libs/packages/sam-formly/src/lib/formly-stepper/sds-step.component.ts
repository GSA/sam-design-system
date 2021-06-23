import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from "@angular/core";
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

  @Input() text: string;

  @Input() id: string = `sds-step-${nextId++}`;

  @Input() selected = false;

  @Input() fieldConfig?: FormlyFieldConfig;

  @Input() options?: FormlyFormOptions; // Each step gets it's own options by default if not provided to determine whether to show error or not

  @Input() model?: any;

  @Input() valid?: boolean;

  @Input() hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  @Input() hide?: boolean;

  @Input() isReview?: boolean

  @Input() mode: NavigationMode;

  @Input() route: string;

  @Output() modelChange = new EventEmitter<any>();
}