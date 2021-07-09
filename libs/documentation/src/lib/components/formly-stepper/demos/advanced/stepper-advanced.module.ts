import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperAdvancedDemoComponent } from "./stepper-advanced.component";
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { AddSubawardeeDialogDemo, SubawardeeDemoComponent } from "./subawardee.component";
import { FormlyModule } from "@ngx-formly/core";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { CustomStepperDemo } from "./custom-stepper.component";
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
    SdsFormlyModule,
    SdsStepperModule,
    FormlyModule,
    SdsActionsMenuModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
  ],
  declarations: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo,
    CustomStepperDemo,
  ],
  exports: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo,
    CustomStepperDemo,
  ],
  bootstrap: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo,
    CustomStepperDemo,
  ]
})
export class StepperAdvancedModule {}
