import { Directive, HostListener, Input } from "@angular/core";
import { SdsStepper } from "./sds-stepper";

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
    if (!this._stepper.flatSteps) {
      return true;
    }

    return this._stepper.selectedStepIndex >= (this._stepper.flatSteps.length - 1) ? true : undefined;
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
})
export class SdsStepperNavDirective {

  @Input() sdsStepperNav: string;

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
    this._stepper.changeStep(this.sdsStepperNav);
  }
}
