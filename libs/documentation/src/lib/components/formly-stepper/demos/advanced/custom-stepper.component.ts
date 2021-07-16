import { Component } from "@angular/core";
import { SdsStepper } from '@gsa-sam/sam-formly';

@Component({
  selector: `custom-stepper-demo`,
  templateUrl: `./custom-stepper.component.html`,
  providers: [{provide: SdsStepper, useExisting: CustomStepperDemo}],
  styles: [
    '.justify-content-space-between {justify-content: space-between; }',
    '.usa-sidenav__item--disabled {cursor: default; hover:none; opacity: 60%; pointer-events: none}',
  ]
})
export class CustomStepperDemo extends SdsStepper {

}
