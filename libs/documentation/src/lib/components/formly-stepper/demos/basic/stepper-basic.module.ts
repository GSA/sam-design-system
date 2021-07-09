import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperBasicDemoComponent } from "./stepper-basic.component";
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { StepperBasicCustomComponent } from "./stepper-basic-custom";
import { SdsIconModule } from "@gsa-sam/components";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  slashCircleFill,
  checkCircleFill,
  circle,
  question,
  save,
  x
} from "ngx-bootstrap-icons";

@NgModule({
  imports: [
    CommonModule,
    SdsStepperModule,
    SdsFormlyModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
  ],
  declarations: [
    StepperBasicDemoComponent,
    StepperBasicCustomComponent
  ],
  exports: [
    StepperBasicDemoComponent,
    StepperBasicCustomComponent
  ],
  bootstrap: [
    StepperBasicDemoComponent,
    StepperBasicCustomComponent
  ]
})
export class StepperBasicModule {}
