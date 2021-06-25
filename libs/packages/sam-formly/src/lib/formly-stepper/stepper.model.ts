import { TemplateRef } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

export interface StepModel {
  children: StepModel[];

  stepTemplate: TemplateRef<any>;

  /**
   * Required when stepTemplate is defined - provides ways to check
   * if the custom template step is valid
   */
  stepValidationFn: (model) => boolean;

  text: string;

  id: string;

  selected: boolean;

  fieldConfig?: FormlyFieldConfig;

  options?: FormlyFormOptions; // Each step gets it's own options by default if not provided to determine whether to show error or not

  model?: any;

  valid?: boolean;

  hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  hide?: boolean;

  isReview?: boolean

  mode: NavigationMode;

  route: string;
}