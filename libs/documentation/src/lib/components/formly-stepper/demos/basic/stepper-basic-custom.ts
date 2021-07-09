import { Component } from "@angular/core";
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `stepper-basic-custom-demo`,
  templateUrl: `./stepper-basic-custom.html`,
  providers: [{provide: SdsStepper, useExisting: StepperBasicCustomComponent}]
})
export class StepperBasicCustomComponent extends SdsStepper {

}