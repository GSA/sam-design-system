import { TemplateRef } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface StepModel {
  children: StepModel[];

  /**
   * Template reference to display for the step if using custom template
   */
  stepTemplate: TemplateRef<any>;

  /**
   * Required when stepTemplate is defined - provides ways to check
   * if the custom template step is valid
   */
  stepValidationFn: (model) => boolean;

  /**
   * Label for step to display in side navigation
   */
  text: string;

  /**
   * unique Id of step - required.
   * This will be used during validity mapping along with url navgation
   */
  id: string;

  /**
   * Whether this step is the active step in the UI. Only
   * one step may be selected in a stepper at a time
   */
  selected: boolean;

  /**
   * The formly field config to display for the step. Alternatively
   * a template ref may also be used by defining the stepTemplate property
   */
  fieldConfig?: FormlyFieldConfig;

  /**
   * Each step gets it's own options by default if not provided to determine whether to show error or not
   */
  options?: FormlyFormOptions;

  /**
   * If the model for the step should be separated from global model, then users may define
   * the model reference here. If not defined, then form values will be added to global
   * stepper model
   */
  model?: any;

  /**
   * Whether this step is valid or not. Invalid steps will be indeicated through a
   * cross icon in the side navigation
   */
  valid?: boolean;

  /**
   * Funcation to describe whether this step should be hidden - this method
   * is re-evaluted any time users save or move to another step
   */
  hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  /**
   * Whether this step is hidden from view
   */
  hide?: boolean;

  /**
   * Whether this step is a review step - Review steps are disabled until all other steps
   * are valid
   */
  isReview?: boolean;

  /**
   * Users have two options for NavigationMode
   * INTERNAL - allow the step to be clicked and navigated into
   * LABEL - display bold text for step and treat the step as a label
   */
  mode: NavigationMode;

  /**
   * If users would like clicking on the step to navigate to another route, they may define
   * the route here
   */
  route?: string;

  /**
   * Whether users should be allowed to navigate to this step or not
   */
  disabled?: boolean;
}
