import { AfterContentInit, Component } from "@angular/core";
import { SdsStepper } from "@gsa-sam/sam-formly";


@Component({
  selector: `uswds-custom-stepper-demo`,
  templateUrl: './uswds-custom-stepper.component.html',
  providers: [
    {provide: SdsStepper, useExisting: USWDSCustomStepperComponent}
  ]
})
export class USWDSCustomStepperComponent extends SdsStepper implements AfterContentInit {

  stepLabels = [];
  currentStepIndex = 0;

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.stepLabels = this.stepTemplates.map(stepTemplate => {
      return {...stepTemplate, label: stepTemplate.text};
    });
  }

  onStepChange(stepIndex) {
    this.changeStep(this.stepTemplates.get(stepIndex).id);
    this.currentStepIndex = stepIndex;
  }
}
