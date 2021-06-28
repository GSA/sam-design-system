import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, HostListener, Input, Output, QueryList, SimpleChanges } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { SdsStepComponent } from "./sds-step.component";
import * as _ from 'lodash-es';

let nextId = 0;
@Component({
  selector: `sds-stepper`,
  templateUrl: './sds-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsStepperComponent {
  @ContentChildren(SdsStepComponent) stepTemplates: QueryList<SdsStepComponent>;

  // @Input() steps: FormlyStep[];

  @Input() model: any = {};

  @Input() currentStepId: string;

  @Input() stepValidityMap: any = {};

  /**
   * Toggle custom error handling from user side. By default, errors are displayed
   * only on save click or when loading a pre-saved form with defined validity.
   * @default false
   */
  @Input() customErrorHandling = false;

  @Input() id = `sds-stepper-${nextId++}`;

  /**
   * Configurable query parameter to use when keeping track of which
   * step the user is on from the URL. Useful when we'd want multiple
   * steppers in one page but don't want the query params to conflict
   * @default - sdsStepId
   */
  @Input() queryParamKey = 'sdsStepId';

  @Output() saveData = new EventEmitter<{ model: any, metadata: any }>();

  @Output() stepChange = new EventEmitter<SdsStepComponent>();

  @Output() modelChange = new EventEmitter<any>();

  @Output() close = new EventEmitter();

  @Output() submit = new EventEmitter();

  fields: FormlyFieldConfig[];

  navigationMode = NavigationMode;

  _currentStep: SdsStepComponent;
  _currentStepIndex: number;
  _dataEntryStepsDef: SdsStepComponent[] = [];

  _isReviewAndSubmitDisabled = true;

  reviewFields: FormlyFieldConfig[] = [];
  isReviewMode: boolean = false;

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
    if (!this._currentStep) {
      return;
    }

    if (changes.currentStepId && this._currentStep.id != changes.currentStepId.currentValue) {
      this.changeStep(changes.currentStepId.currentValue);
    }
  }

  ngAfterContentInit() {

    this._dataEntryStepsDef = this.getFlatSteps(this.stepTemplates);
    this._dataEntryStepsDef.forEach(step => {
      step.model = step.model ? step.model : this.model;
    });



    if (this.activatedRoute.snapshot.queryParams.sdsStepId) {
      this.currentStepId = this.activatedRoute.snapshot.queryParams.sdsStepId;
    } else if (!this.currentStepId) {
      this.currentStepId = this._dataEntryStepsDef[0].id;
      this._currentStepIndex = 0;
      this._currentStep = this._dataEntryStepsDef[this._currentStepIndex];
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
    })
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
    this._dataEntryStepsDef = this.getFlatSteps(this.stepTemplates);
    let stepIndex = this._dataEntryStepsDef.findIndex(step => step.id === stepId);
    stepIndex = stepIndex === -1 ? 0 : stepIndex;

    if (incrementor) {
      stepIndex = stepIndex + incrementor;
    }

    const step = this._dataEntryStepsDef[stepIndex];
    if (step.isReview && this._isReviewAndSubmitDisabled) {
      return;
    }

    // Update current step's validity before moving to next step
    if (this._currentStep) {
      this.updateSidenavValidation(this._currentStep);
      this.checkReviewAndSubmit();
      this._currentStep.selected = false;
    }

    this._currentStepIndex = stepIndex;
    this._currentStep = this._dataEntryStepsDef[stepIndex];

    this._currentStep.selected = true;
    this.currentStepId = this._currentStep.id;

    this.fields = [this._currentStep.fieldConfig];

    if (!this._currentStep.options && !this.customErrorHandling) {
      this._currentStep.options = {};
    }

    if (!this._currentStep.options.showError && !this.customErrorHandling) {
      this._currentStep.options.showError = () => false;
    }

    if (this.stepValidityMap[this._currentStep.id] === false) {
      this._currentStep.options.showError = (field) => field.formControl.invalid;
    }

    if (this._currentStep.mode === NavigationMode.INTERNAL) {
      this.router.navigate(this._currentStep.route ? [this._currentStep.route] : [], {
        queryParams: {
          [this.queryParamKey]: this.currentStepId
        },
        queryParamsHandling: 'merge'
      });
    }

    this.stepChange.emit(this._currentStep);
  }

  onNextStep() {
    this.changeStep(this._currentStep.id, 1);
  }

  onPreviousStep() {
    this.changeStep(this._currentStep.id, -1);
  }

  closeback() {
    this.close.emit();
  }

  onSaveClicked() {
    this._dataEntryStepsDef = this.getFlatSteps(this.stepTemplates);
    this._currentStepIndex = this._dataEntryStepsDef.findIndex(step => step.id === this._currentStep.id);

    if (!this.customErrorHandling) {
      this._currentStep.options.showError = (field) => !field.formControl.valid;
    }

    this.updateSidenavValidation(this._currentStep);
    this.checkReviewAndSubmit();
    
    this.saveData.emit({
      model: this.model,
      metadata: {
        stepId: this._currentStep.id,
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

  onSubmit() {
    this.submit.emit();
  }

  private checkReviewAndSubmit() {
    this._isReviewAndSubmitDisabled = this._dataEntryStepsDef.some(step => {
      if (!this.stepValidityMap[step.id]) {
        return true;
      }

      if (!step.isReview && !step.valid) {
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

    const isValid = this.fields[0].formControl.valid;
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