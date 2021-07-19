import { Directive, HostListener, Input } from "@angular/core";
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
