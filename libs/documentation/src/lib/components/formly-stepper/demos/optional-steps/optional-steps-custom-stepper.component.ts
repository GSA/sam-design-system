import { AfterContentInit, Component, Input} from "@angular/core";
import { SdsStepComponent, SdsStepper } from "../../../../../../../packages/sam-formly/src/lib/formly-stepper/sds-stepper";
import { get } from 'lodash-es'

export interface SkipStepRules{
  forwardStepId: string;
  backwardStepId: string;
  fieldToTrigger: string;
  valueToTrigger: string;
}

@Component({
  selector: `optional-steps-custom-stepper-demo`,
  templateUrl: './optional-steps-custom-stepper.component.html',
  providers: [
    {provide: SdsStepper, useExisting: OptionalStepsCustomStepperComponent}
  ]
})
export class OptionalStepsCustomStepperComponent extends SdsStepper implements AfterContentInit {

  stepSkipRules: Array<SkipStepRules> = [
    {
      forwardStepId: 'optionalStepsStepOne',
      backwardStepId: 'optionalStepsStepOnePointFive',
      fieldToTrigger: 'entityOne.title',
      valueToTrigger: 'yes'
    },
    {
      forwardStepId: 'optionalStepsStepOne',
      backwardStepId: 'optionalStepsStepOnePointSevenFive',
      fieldToTrigger: 'entityOne.skip-two',
      valueToTrigger: 'yes'
    }
  ];

  /**
   * Input to change the behavior when dealing with substeps of the first main step.
   */
  @Input()
  weighSubStepsEqually: boolean = true;

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
  /**
   * Adds additional functionality to handle progess bar.
   * @param stepId - HTML id value of the step to base step change on.
   * @param direction - direction of step change. -1 go back, 1 go forward. If this value is not provided, the step specified in stepId will be loaded.
   */
  async changeStep(stepId: string, direction?: -1 | 1): Promise<void> {
    let stepsToAdvance: number = this.incrementationRules(stepId, direction, this.stepSkipRules);

    // Call parent's changeStep to handle advancing content area to corrent step
    await super.changeStep(stepId, stepsToAdvance);

    //NOTE: After this point, this.selectedStep is the step that is being rendered for the user, i.e. the next/prev step

    // Afterwards, update the indicator at the top to show the expected completion percent
    let mainStepIndex = (this.stepTemplates.toArray() as Array<any>).findIndex(step => step === this.selectedStep);
    // If stepID is a sub-step
    if(mainStepIndex === -1){
      let subStepIndex = -1;
      this.stepTemplates.toArray().forEach((mainStep, index) => {
        const tempIndex = this.getSubStepIndex(mainStep);
        const selectedStepIsChild = tempIndex !== -1;
        if(selectedStepIsChild){
          mainStepIndex = index;
          subStepIndex = tempIndex; // Index of the current step
        }
      } );
      this.stepLabels[mainStepIndex].completionPercent = this.calculateStepProgress(mainStepIndex, subStepIndex)
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

  calculateStepProgress(mainStep: number, childIndex: number, stepsAdvanced?: number): number{
    const totalSubsteps = this.stepTemplates.get(mainStep).children.length;
    if(this.weighSubStepsEqually){
      return Math.round(((childIndex + 1) / (totalSubsteps + 1)) * 100);
    } else {
      if(childIndex === 0){
        return 50;
      } else {
        return 50 + Math.round(((childIndex + 1) / (totalSubsteps + 1)) * 50);
      }
    }
  }

  /**
   * Returns the number of steps to advance based on criteria defined in this function.
   * If moving to last/next step, returns -1/1. If skipping step, calculation will occur here and be returned to main function to execute actual advancement.
   */
  incrementationRules(currentStepId: string, incrementor: number, stepSkipRules?: Array<SkipStepRules>): number{
    if(incrementor === undefined){
      return 0;
    }else if(!stepSkipRules){
      return incrementor
    /**
     * If there are no steps in stepSkipRules when going forward which have a forwardStepID
     * that matches currentStepId or when going backwards that have a backwardStepID
     * that matches currentStepID, move by a single step in the preferred direction.
     */
    } else if(stepSkipRules.findIndex(step => {
      return  (incrementor === 1 && step.forwardStepId === currentStepId) ||
              (incrementor === -1 && step.backwardStepId === currentStepId)
    }) === -1){
      return incrementor;
    }

    const matchingSteps = this.stepSkipRules
      .filter(step => (incrementor === 1 ? step.forwardStepId : step.backwardStepId) === this.currentStepId) // Check that starting step for this rull is current step
      .filter(step => get(this.model, step.fieldToTrigger) === step.valueToTrigger) // Check that value of field to check is correct

    if(matchingSteps.length === 0)
      return incrementor;

    const stepsToChange = matchingSteps
        .map(step => { // Determine number of steps this rule will change
          const forwardStepIndex = this.flatSteps.findIndex(flatStep => flatStep.id === step.forwardStepId);
          const backwardStepIndex = this.flatSteps.findIndex(flatStep => flatStep.id === step.backwardStepId);
          return {...step, stepsToAdvance: backwardStepIndex - forwardStepIndex};
        })
        // Determine which will step forward the least steps and do that.
        .sort((a,b) => a.stepsToAdvance - b.stepsToAdvance )[0].stepsToAdvance * incrementor;

        return stepsToChange;
  }

}
