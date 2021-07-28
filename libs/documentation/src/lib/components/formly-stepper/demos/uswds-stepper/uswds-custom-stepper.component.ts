import { AfterContentInit, Component, OnInit } from "@angular/core";
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
    this.stepLabels = this.stepTemplates.map((stepTemplate, index) => {
      if (stepTemplate.id === this.currentStepId) {
        this.currentStepIndex = index;
      }

      return {...stepTemplate, label: stepTemplate.text};
    });
  }
}
