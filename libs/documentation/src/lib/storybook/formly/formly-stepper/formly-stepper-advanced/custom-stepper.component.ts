import { Component } from '@angular/core';
import { SdsDialogRef } from '@gsa-sam/components';
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `custom-stepper-demo`,
  templateUrl: `./custom-stepper.component.html`,
  providers: [{ provide: SdsStepper, useExisting: CustomStepperDemo }],
  styles: [
    '.justify-content-space-between {justify-content: space-between; }',
    '.usa-sidenav__item--disabled {cursor: default; hover:none; opacity: 60%; pointer-events: none}',
  ],
})
export class CustomStepperDemo extends SdsStepper {
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
}
