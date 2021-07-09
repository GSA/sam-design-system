import { Component } from "@angular/core";
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `custom-stepper-demo`,
  templateUrl: `./custom-stepper.component.html`,
  providers: [{provide: SdsStepper, useExisting: CustomStepperDemo}]
})
export class CustomStepperDemo extends SdsStepper {

}
