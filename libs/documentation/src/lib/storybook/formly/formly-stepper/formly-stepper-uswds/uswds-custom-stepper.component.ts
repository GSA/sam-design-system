import { AfterContentInit, Component, Input } from '@angular/core';
import { SdsStepComponent, SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `uswds-custom-stepper-demo`,
  templateUrl: './uswds-custom-stepper.component.html',
  providers: [{ provide: SdsStepper, useExisting: USWDSCustomStepperComponent }],
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

      return { ...stepTemplate, label: stepTemplate.text };
    });
  }
  async changeStep(stepId: string, incrementor?: 1 | -1) {
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

      /**
       * With index of first child being 0, need to increment both the child's
       * index and total length to ensure getting a valid percent.
       *
       * For example, with one sub-step step indicator should show 50% completion
       * Without incrementing input values you'd get 0 / 1 = 0%
       * With incrementing you'd get 1 / 2 = 50%
       */
      this.stepLabels[mainStepIndex].completionPercent = Math.round(
        ((subStepIndex + 1) / (this.stepTemplates.get(mainStepIndex).children.length + 1)) * 100
      );
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
