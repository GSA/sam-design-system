import { Component } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";
import { StepperAdvancedService } from "./stepper-advanced.service";

@Component({
  selector: `stepper-advanced-demo`,
  templateUrl: `./stepper-advanced.component.html`,
  providers: [
    StepperAdvancedService
  ]
})
export class StepperAdvancedDemoComponent {
  navigationMode = NavigationMode;
  model = {
    subawardee: []
  };;

  stepMap = {
    welcome: {
      validationFn: () => true,
    },
    registrationPurpose: {
      fieldConfig: this.stepperAdvancedService.getRegistrationPurpose(),
    },
    enitityInformation: {
      fieldConfig: this.stepperAdvancedService.getEntityInformation(),
    },
    taxpayerInformation: {
      fieldConfig: this.stepperAdvancedService.getTaxpayerForm(),
    },
    subawardee: {
      validationFn: (model: any) => {
        return model.subawardee.length ? true : undefined;
      },
    },
    review: {
      fieldConfig: {
        fieldGroup: [
          this.stepperAdvancedService.getRegistrationPurpose(),
          this.stepperAdvancedService.getEntityInformation(),
          this.stepperAdvancedService.getTaxpayerForm(),
        ]
      },
      validationFn: () => true,
    }
  }

  currentStepId: string;
  stepValidityMap = {};

  constructor(
    private stepperAdvancedService: StepperAdvancedService
  ) {}

  onStepChange($event) {
    this.currentStepId = $event.id;
    if (this.currentStepId === 'review') {
      FormlyUtilsService.setReadonlyMode(true, this.stepMap.review.fieldConfig.fieldGroup as any);
    }
  }

  updateSubawardee($event) {
    this.model.subawardee = $event;
  }
}