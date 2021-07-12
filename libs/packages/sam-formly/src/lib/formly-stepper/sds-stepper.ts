
import { DOCUMENT } from "@angular/common";
import { 
  ChangeDetectionStrategy, ChangeDetectorRef, Component, 
  ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, 
  HostListener, Inject, Input, Output, QueryList, SimpleChanges, 
  TemplateRef, ViewChild } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import * as _ from 'lodash-es';

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
  exportAs: `sdsStep`,
  templateUrl: `./sds-step.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsStepComponent  {
  /**
   * References to Any children this step might contain
   */
  @ContentChildren(SdsStepComponent) children: QueryList<SdsStepComponent>;

  /**
   * Content of step - either a formly field or custome template
   */
  @ViewChild('mainContent', {static: true}) content: TemplateRef<any>;

  /**
   * Custom template reference for this step. If both custom template and field
   * config are provided, then only the custom template will be displayed
   */
  @Input() stepTemplate: TemplateRef<any>;

  /**
   * Required when stepTemplate is defined - provides ways to check
   * if the custom template step is valid
   */
  @Input() stepValidationFn: (model: any, field?: FormlyFieldConfig) => boolean | void;

  /**
   * Human readable label text for this step
   */
  @Input() text: string;

  /**
   * Id for step - auto generated if none is provided
   */
  @Input() id: string = `sds-step-${nextId++}`;

  /**
   * Whether the step is selected or not
   */
  @Input() selected = false;

  /**
   * Formly fields to display for this step
   */
  @Input() fieldConfig?: FormlyFieldConfig;

  /**
   * Each step gets it's own options by default if not provided to determine whether to show error or not
   */
  @Input() options?: FormlyFormOptions;

  /**
   * Reference to data model to store any user input if the input. If not defined,
   * then user input data will be stored in a stepper level global model
   */
  @Input() model?: any;

  /**
   * Defines whether the step has validation issues or not
   */
  @Input() valid?: boolean | void;

  /**
   * Function for whether or not the step is hidden from users or not
   */
  @Input() hideFn?: (model: any, field?: FormlyFieldConfig) => boolean;

  @Input() hide?: boolean;

  /**
   * Defines whether current step is review step. Review steps are generally the last
   * step and contain culmination of user input throughout the steps in a readable format
   */
  @Input() isReview?: boolean

  /**
   * Defines whether the step is navigable or simply a label. Only two options are allowed:
   * INTERNAL - step is navigable. Users can click on it and expect to see information for the step
   * LABEL: Step is not navigable and acts a simple label
   */
  @Input() mode: NavigationMode;

  /**
   * Route to navigate to when the step is clicked. If none provided, then
   * navigation will only modify query parameter to clicked step's ID when clicked
   */
  @Input() route?: string;

  /**
   * Whether users should be allowed to navigate to this step or not
   */
  @Input() disable?: boolean;

  /**
   * Emitted anytime user input changes in the step - only applicable if
   * step is a formly field config
   */
  @Output() modelChange = new EventEmitter<any>();

  constructor(
    @Inject(forwardRef(() => SdsStepper)) public _stepper: SdsStepper,
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

@Directive({
  selector: `[sdsStepper]`,
  exportAs: 'sdsStepper'
})
export class SdsStepper {
  @ContentChildren(SdsStepComponent) stepTemplates: QueryList<SdsStepComponent>;

  /**
   * Singular global model to store user input for all steps. Alternatively,
   * users may pass in a model specifically to each sds-step and manage the data
   * modal separately
   */
  @Input() model: any = {};

  /**
   * Id of the step currently shown to users
   */
  @Input() currentStepId: string;

  /**
   * Mapping of step validity. This maps each step's id to a boolean value indicating
   * whether the step is valid or invalid. This maps defines valid/invalid icons
   * displayed in side nav
   */
  @Input() stepValidityMap: any = {};

  /**
   * Toggle custom error handling from user side. By default, errors are displayed
   * only on save click or when loading a pre-saved form with defined validity.
   * @default false
   */
  @Input() customErrorHandling = false;

  /**
   * Unique identifier for the stepper. If none provided a default id will be used
   */
  @Input() id = `sds-stepper-${nextId++}`;

  /**
   * Configurable query parameter to use when keeping track of which
   * step the user is on from the URL. Useful when we'd want multiple
   * steppers in one page but don't want the query params to conflict
   * @default - sdsStepId
   */
  @Input() queryParamKey = 'sdsStepId';

  /**
   * Output event - emitted when save button is clicked
   */
  @Output() saveData = new EventEmitter<{ model: any, metadata: any }>();

  /**
   * Output event - emitted when a step is changed, either through the
   *  navigation buttons at the bottom of the step or by clicking on a
   *  step in side panel
   */
  @Output() stepChange = new EventEmitter<SdsStepComponent>();

  /**
   * Output event - emitted if the current step is a formly config.
   *  Outputs whenever a model change occurs from the formly field
   */
  @Output() modelChange = new EventEmitter<any>();

  navigationMode = NavigationMode;

  /**
   * Reference to step currently selected and displayed to the user
   */
  selectedStep: SdsStepComponent;

  /**
   * Index of currently selected step in the flatSteps array
   */
  selectedStepIndex: number;

  /**
   * A flattened list of steps - steps with children are placed after their parent
   * in the list
   */
  flatSteps: SdsStepComponent[] = [];

  /**
   * Switch that toggles on if and only if all steps in the flattned list of steps
   * are seen as valid in the validity map
   */
  _isReviewAndSubmitDisabled = true;

  /**
   * Event emitted by sds-step component whenever a model change
   * occurs. Emits the modelChange event. This can be useful if
   * users want to attach a listener for any model change in overall
   * steps rather than listening for model change in each individual step
   * @param $event 
   */
  @HostListener('stepModelChange', ['$event'])
  onModelChange($event: CustomEvent) {
    $event.stopImmediatePropagation();
    this.modelChange.emit($event.detail);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public cdr: ChangeDetectorRef,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.selectedStep) {
      return;
    }

    if (changes.currentStepId && this.selectedStep.id != changes.currentStepId.currentValue) {
      this.changeStep(changes.currentStepId.currentValue);
    }

    if (changes.stepValidityMap && changes.stepValidityMap.currentValue) {
      this.flatSteps.forEach(step => {
        step.valid = this.stepValidityMap[step.id];
      })
    }
  }

  ngAfterContentInit() {

    this.flatSteps = this.getFlatSteps(this.stepTemplates);
    this.flatSteps.forEach(step => {
      step.model = step.model ? step.model : this.model;
    });

    if (this.activatedRoute.snapshot.queryParams[this.queryParamKey]) {
      this.currentStepId = this.activatedRoute.snapshot.queryParams[this.queryParamKey];
    } else if (!this.currentStepId) {
      this.currentStepId = this.flatSteps[0].id;
      this.selectedStepIndex = 0;
      this.selectedStep = this.flatSteps[this.selectedStepIndex];
    }

    if (this.stepValidityMap) {
      this.updateValidity(this.stepValidityMap, this.stepTemplates);
      this.checkReviewAndSubmit();
    } else {
      this.stepValidityMap = {};
    }

    this.changeStep(this.currentStepId);

    this.activatedRoute.queryParams.subscribe(queryParam => {
      if (queryParam[this.queryParamKey] && queryParam[this.queryParamKey] != this.currentStepId) {
        this.changeStep(queryParam[this.queryParamKey]);
      }
    });
  }
 
  getFlatSteps(stepTemplates: QueryList<SdsStepComponent>): SdsStepComponent[] {
    let flat: SdsStepComponent[] = [];
    stepTemplates.forEach(step => {
        if (step.hideFn && step.hideFn(step.model ? step.model : this.model, step.fieldConfig)) {
          step.hide = true;
          return;
        }
        step.hide = false;
        if (step.mode !== NavigationMode.LABEL) {
          flat.push(step);
        }

      if (step.children && step.children.length) {
        const childSteps = this.getFlatSteps(step.children);
        flat = flat.concat(childSteps);
      }
    });

    return flat;
  }

  /**
   * Change currently selected step
   * @param stepId - The id of step to change to
   * @param incrementor - Optional input - Either a 1 or -1. When a value of 1
   *  is provided, then the step to change to will be the next step from the input step
   *  given. When a value of -1 is provided, then the selected step will be the step
   *  previous to the provided step
   */
  changeStep(stepId: string, incrementor?: 1 | -1) {
    this.flatSteps = this.getFlatSteps(this.stepTemplates);
    let stepIndex = this.flatSteps.findIndex(step => step.id === stepId);
    stepIndex = stepIndex === -1 ? 0 : stepIndex;

    if (incrementor) {
      stepIndex = stepIndex + incrementor;
    }

    const step = this.flatSteps[stepIndex];
    if (step.isReview && this._isReviewAndSubmitDisabled) {
      return;
    }

    // Update current step's validity before moving to next step
    if (this.selectedStep) {
      this.updateSidenavValidation(this.selectedStep);
      this.checkReviewAndSubmit();
      this.selectedStep.selected = false;
    }

    this.selectedStepIndex = stepIndex;
    this.selectedStep = this.flatSteps[stepIndex];

    this.selectedStep.selected = true;
    this.currentStepId = this.selectedStep.id;

    if (!this.selectedStep.options && !this.customErrorHandling) {
      this.selectedStep.options = {};
    }

    if (!this.selectedStep.options.showError && !this.customErrorHandling) {
      this.selectedStep.options.showError = () => false;
    }

    if (this.stepValidityMap[this.selectedStep.id] === false) {
      this.selectedStep.options.showError = (field) => field.formControl.invalid;
    }

    if (this.selectedStep.mode === NavigationMode.INTERNAL) {
      this.router.navigate(this.selectedStep.route ? [this.selectedStep.route] : [], {
        queryParams: {
          [this.queryParamKey]: this.currentStepId
        },
        queryParamsHandling: 'merge'
      });
    }

    this.stepChange.emit(this.selectedStep);
  }

  onNextStep() {
    this.changeStep(this.selectedStep.id, 1);
  }

  onPreviousStep() {
    this.changeStep(this.selectedStep.id, -1);
  }

  onSaveClicked() {
    this.flatSteps = this.getFlatSteps(this.stepTemplates);
    this.selectedStepIndex = this.flatSteps.findIndex(step => step.id === this.selectedStep.id);

    this.updateSidenavValidation(this.selectedStep);
    this.checkReviewAndSubmit();
    
    if (!this.customErrorHandling && this.stepValidityMap[this.currentStepId] === false) {
      this.selectedStep.options.showError = (field) => !field.formControl.valid;
    }

    this.saveData.emit({
      model: this.model,
      metadata: {
        stepId: this.selectedStep.id,
        stepValidityMap: this.stepValidityMap
      }
    });
  }

  getDisplayedSteps(steps: QueryList<SdsStepComponent>) {
    if (!steps) {
      return [];
    }
    return steps.filter((step => !step.hide));
  }

  private checkReviewAndSubmit() {
    this._isReviewAndSubmitDisabled = this.flatSteps.some(step => {
      if (step.isReview) {
        return false;
      }

      if (!this.stepValidityMap[step.id]) {
        return true;
      }

      return false;
    });
  }

  private updateValidity(validityMap: any, stepTemplates: QueryList<SdsStepComponent>) {
    stepTemplates.forEach(step => {

      if (!step) {
        return;
      }

      step.valid = validityMap[step.id];
      if (step.children) {
        this.updateValidity(validityMap, step.children);
      }
    })
  }

  private updateSidenavValidation(currentStep: SdsStepComponent) {
    if (!currentStep) {
      return;
    }

    // Custom validation function was provided, use provided custom validation
    if (currentStep.stepValidationFn) {
      const isValid = currentStep.stepValidationFn(currentStep.model ? currentStep.model : this.model);
      currentStep.valid = isValid;
      this.stepValidityMap[currentStep.id] = isValid;
      return;
    }

    const currentStepFieldConfig = currentStep.fieldConfig;
    if (!currentStepFieldConfig ||
      this.isFormEmpty(currentStepFieldConfig.formControl, currentStepFieldConfig.defaultValue)) {
      return;
    }

    const isValid = currentStep.fieldConfig.formControl.valid;
    currentStep.valid = isValid;
    this.stepValidityMap[currentStep.id] = isValid;
  }

  private isFormEmpty(form: AbstractControl, defaultValue?: any) {
    if (!form) {
      return true;
    }

    if (form.value === false) {
      return false;
    }

    if (!form.value || form.value.length === 0) {
      return true;
    }

    if (typeof (form.value) != 'object') {
      return false;
    }

    const cleanModel = this.getCleanObject(form.value);
    return Object.keys(cleanModel).length === 0 || _.isEqual(cleanModel, defaultValue);
  }


  private getCleanObject(input: any, output?: any) {
    output = output || {};
    for (var key in input) {
      var value = input[key];
      if (value) {
        if (typeof value === 'object' && value !== null) {
          this.getCleanObject(value, output);
        } else {
          // Treat true string as boolean value & ignore value of string 'false'
          if (value === 'true') {
            output[key] = true;
          } else if (value != 'false') {
            output[key] = value;
          }
        }
      }
    }
    return output;
  }
}