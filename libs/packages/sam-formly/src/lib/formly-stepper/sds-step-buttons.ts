import { Directive, forwardRef, HostListener, Inject, Input, OnDestroy, OnInit } from "@angular/core";
import { UsaStepIndicatorComponent } from "@gsa-sam/ngx-uswds";
import { Subscription } from "rxjs";
import { SdsStepComponent, SdsStepper } from "./sds-stepper";

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: `[sdsStepperNext]`,
  host: {
    '[attr.disabled]': '_disabled()'
  }
})
export class SdsStepperNextDirective {
  constructor(
    public _stepper: SdsStepper,
  ) {}

  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  @HostListener('click')
  _handleClick() {
    this._stepper.onNextStep();
  }

  _disabled() {
    const flatSteps = this._stepper.flatSteps;
    const nextIndex = this._stepper.selectedStepIndex + 1;

    if (!flatSteps || this._stepper.selectedStepIndex == undefined) {
      return true;
    }

    if (this._stepper.selectedStepIndex >= flatSteps.length - 1) {
      return true;
    }

    if (flatSteps[nextIndex].disabled || (flatSteps[nextIndex].isReview && this._stepper._isReviewAndSubmitDisabled)) {
      return true;
    }

    return;
  }
}

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: `[sdsStepperPrevious]`,
  host: {
    '[attr.disabled]': '_stepper.selectedStepIndex === 0 ? true : undefined'
  }
})
export class SdsStepperPreviousDirective {
  constructor(
    public _stepper: SdsStepper
  ) {}

  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  @HostListener('click')
  _handleClick() {
    this._stepper.onPreviousStep();
  }

  _disabled() {
    const flatSteps = this._stepper.flatSteps;
    const previousStep = this._stepper.selectedStepIndex - 1;

    if (!flatSteps || !this._stepper.selectedStepIndex) {
      return true;
    }

    if (this._stepper.selectedStepIndex === 0) {
      return true;
    }

    if (flatSteps[previousStep].disabled || (flatSteps[previousStep].isReview && this._stepper._isReviewAndSubmitDisabled)) {
      return true;
    }

    return;
  }
}

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: `[sdsStepperSave]`,
})
export class SdsStepperSaveDirective {
  constructor(
    public _stepper: SdsStepper
  ) {}

  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  @HostListener('click')
  _handleClick() {
    this._stepper.onSaveClicked();
  }
}

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: `[sdsStepperNav]`,
  host: {
    '[attr.disabled]': 'sdsStepperNav.disabled'
  }
})
export class SdsStepperNavDirective {

  @Input() sdsStepperNav: SdsStepComponent;

  constructor(
    public _stepper: SdsStepper
  ) {}

  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  @HostListener('click')
  _handleClick() {
    this._stepper.changeStep(this.sdsStepperNav.id);
  }
}

/**
 * Directive designed for when using ngx-uswds' step indicator component
 * with sds stepper. This directive manages internal sync of usa-step-indicator
 * and sds stepper steps such that when a step changes in one component, it is
 * accurately reflected on the other
 * 
 * usage example: 
 * Inside the template of a component that extends SdsStepper - 
 *  <usa-step-indicator sdsStepperUSWDSNav> </usa-step-indicator>
 */
@Directive({
  selector: `usa-step-indicator [sdsStepperUSWDSNav]`
})
export class SdsStepperUSWDSNavDirective implements OnInit, OnDestroy {
  constructor(
    @Inject(forwardRef(() => SdsStepper)) public _stepper: SdsStepper,
    private _el: UsaStepIndicatorComponent,
  ) {}

  stepChangeSubscriptions: Subscription = new Subscription();
  
  ngOnInit() {
    const usaStepChange = this._el.currentStepChange.subscribe(stepIndex => {
      const step = this._el.steps[stepIndex];
      const nextStep = this._stepper.flatSteps.find(flatStep => flatStep.text === step.label);
      this._stepper.changeStep(nextStep.id);
    });

    const sdsStepChange = this._stepper.stepChange.subscribe(newStep => {
      const stepIndex = this._el.steps.findIndex(usaStep => usaStep.label === newStep.text);
      this._el.currentStep = stepIndex;
    });

    this.stepChangeSubscriptions.add(usaStepChange);
    this.stepChangeSubscriptions.add(sdsStepChange);
  }

  ngOnDestroy() {
    this.stepChangeSubscriptions.unsubscribe();
  }
}
