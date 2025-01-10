import { Component, EventEmitter, Output } from '@angular/core';
import { SdsDialogRef } from '@gsa-sam/components';
import { SdsStepper } from '@gsa-sam/sam-formly';
import { FormlyForm } from '@ngx-formly/core';

@Component({
  selector: `custom-stepper-demo`,
  templateUrl: `./custom-stepper.component.html`,
  providers: [{ provide: SdsStepper, useExisting: CustomStepperDemo }],
  styles: [
    '.justify-content-space-between {justify-content: space-between; }',
    '.usa-sidenav__item--disabled {cursor: default; hover:none; opacity: 60%; pointer-events: none}',
    '.hr {width: 100%; }',
  ],
})
export class CustomStepperDemo extends SdsStepper {
  @Output()
  submittedData = new EventEmitter<FormlyForm>();

  responseDialog: SdsDialogRef<any>;

  onDialogOpen($event) {
    this.responseDialog = $event;
  }

  onCancelClicked() {
    this.responseDialog.close();
    this.responseDialog = undefined;
  }

  onSideNavClick() {
    if (!this.responseDialog) {
      return;
    }
    this.responseDialog.close();
    this.responseDialog = undefined;
  }

  showReviewButton() {
    const nextStep = this.flatSteps[this.selectedStepIndex + 1];

    return nextStep && nextStep.isReview;
  }

  showSubmitButton() {
    const lastStepIndex = this.flatSteps.length - 1;
    const isLastStep = this.selectedStepIndex == lastStepIndex;

    return isLastStep;
  }

  showNextButton() {
    return !this.showReviewButton() && !this.showSubmitButton();
  }

  submitClicked() {
    this.submittedData.emit(this.model);
  }
}