import { AfterContentInit, Component} from "@angular/core";
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
  async changeStep(stepId: string, incrementor?: 1 | -1) {
    await super.changeStep(stepId, incrementor);

    let mainStepIndex = (this.stepTemplates.toArray() as Array<any>).findIndex(step => step === this.selectedStep);
    if(mainStepIndex === -1){
      let childIndex = -1;
      (this.stepTemplates.toArray() as Array<any>).forEach((mainStep, index) => {
        const tempIndex = mainStep.children.toArray().findIndex(child => {
          return child === this.selectedStep;
        });
        const selectedStepIsChild = tempIndex !== -1;
        if(selectedStepIsChild){
          mainStepIndex = index;
          childIndex = tempIndex;
        }
      } );

      this.stepLabels[mainStepIndex].completionPercent = Math.round(
        (
          (childIndex + 1) /
          (this.stepTemplates.get(mainStepIndex).children.length + 1)
        ) * 100
      );
    } else {
      this.stepLabels[mainStepIndex].completionPercent = 0;
    }
    this.currentStepIndex = mainStepIndex;
  }


}
