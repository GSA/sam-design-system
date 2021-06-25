import { Component } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig } from "@ngx-formly/core";
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
      validationFn: () => true,
    }
  }

  constructor(
    private stepperAdvancedService: StepperAdvancedService
  ) {}
}