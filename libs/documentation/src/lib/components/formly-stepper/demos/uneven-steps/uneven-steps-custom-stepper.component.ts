import { AfterContentInit, Component, OnInit } from '@angular/core';
import { SdsStepComponent, SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `uneven-steps-custom-stepper-demo`,
  templateUrl: './uneven-steps-custom-stepper.component.html',
  providers: [{ provide: SdsStepper, useExisting: UnevenStepsCustomStepperComponent }],
})
export class UnevenStepsCustomStepperComponent extends SdsStepper implements AfterContentInit {
  stepLabels = [];
  currentStepIndex = 0;

  ngAfterContentInit() {
    super.ngAfterContentInit();
    this.stepLabels = this.stepTemplates.map((stepTemplate, index) => {
      if (stepTemplate.id === this.currentStepId) {
        this.currentStepIndex = index;
      }

      return { ...stepTemplate, label: stepTemplate.text };
    });
  }

  async changeStep(stepId: string, incrementor?: 1 | -1) {
    const startingStep: SdsStepComponent = this.flatSteps.find((step) => step.id === stepId);
    await super.changeStep(stepId, incrementor);
    //NOTE: After this point, this.selectedStep is the step that is being rendered for the user, i.e. the next/prev step

    // Afterwards, update the indicator at the top to show the expected completion percent
    let mainStepIndex = (this.stepTemplates.toArray() as Array<any>).findIndex((step) => step === this.selectedStep);
    // If sub-step
    if (mainStepIndex === -1) {
      let subStepIndex = -1;
      this.stepTemplates.toArray().forEach((mainStep, index) => {
        const tempIndex = this.getSubStepIndex(mainStep);
        const selectedStepIsChild = tempIndex !== -1;
        if (selectedStepIsChild) {
          mainStepIndex = index;
          subStepIndex = tempIndex;
        }
      });

      if (incrementor === 1) {
        this.stepLabels[mainStepIndex].completionPercent = startingStep.fieldConfig.templateOptions.completedValue ?? 0;
      } else {
        // Need to get previous step to know what it's completedValue is.
        const currentFlatStepsIndex = this.flatSteps.findIndex((step) => step.id === this.selectedStep.id);
        this.stepLabels[mainStepIndex].completionPercent =
          this.flatSteps[currentFlatStepsIndex - 1].fieldConfig.templateOptions.completedValue ?? 0;
      }
      // If main step
    } else {
      this.stepLabels[mainStepIndex].completionPercent = 0;
    }
    this.currentStepIndex = mainStepIndex;
  }

  /**
   * Returns the index of the selected step within the given mainStep's children
   */
  getSubStepIndex(mainStep: SdsStepComponent): number {
    return mainStep.children.toArray().indexOf(this.selectedStep);
  }
}
