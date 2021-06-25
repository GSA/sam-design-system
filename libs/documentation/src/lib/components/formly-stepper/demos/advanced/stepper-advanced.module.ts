import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperAdvancedDemoComponent } from "./stepper-advanced.component";
import { SdsFormlyModule, SdsFormlyStepperModule } from '@gsa-sam/sam-formly';
import { SubawardeeDemoComponent } from "./subawardee.component";


@NgModule({
  imports: [
    CommonModule,
    SdsFormlyModule,
    SdsFormlyStepperModule,
  ],
  declarations: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
  ],
  exports: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent
  ],
  bootstrap: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent
  ]
})
export class StepperAdvancedModule {}
