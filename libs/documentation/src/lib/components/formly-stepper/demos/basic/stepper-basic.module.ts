import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperBasicDemoComponent } from "./stepper-basic.component";
import { SdsFormlyStepperModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    SdsFormlyStepperModule,
  ],
  declarations: [
    StepperBasicDemoComponent
  ],
  exports: [
    StepperBasicDemoComponent
  ],
  bootstrap: [
    StepperBasicDemoComponent
  ]
})
export class StepperBasicModule {}
