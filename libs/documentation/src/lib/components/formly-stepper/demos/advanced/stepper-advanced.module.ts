import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StepperAdvancedDemoComponent } from "./stepper-advanced.component";
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { AddSubawardeeDialogDemo, SubawardeeDemoComponent } from "./subawardee.component";
import { FormlyModule } from "@ngx-formly/core";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";


@NgModule({
  imports: [
    CommonModule,
    SdsFormlyModule,
    SdsStepperModule,
    FormlyModule,
    SdsActionsMenuModule,
  ],
  declarations: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo,
  ],
  exports: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo,
  ],
  bootstrap: [
    StepperAdvancedDemoComponent,
    SubawardeeDemoComponent,
    AddSubawardeeDialogDemo
  ]
})
export class StepperAdvancedModule {}
