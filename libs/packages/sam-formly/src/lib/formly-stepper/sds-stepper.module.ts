import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsFormlyModule } from "../formly/formly.module";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
  question,
  save
} from "ngx-bootstrap-icons";
import { RouterModule } from "@angular/router";
import { FormlyModule } from "@ngx-formly/core";
import { SdsStepper, SdsStepComponent, SdsStepFooterComponent, SdsStepHeaderComponent } from "./sds-stepper";
import { SdsStepperNavDirective, SdsStepperNextDirective, SdsStepperPreviousDirective, SdsStepperSaveDirective, SdsStepperUSWDSNavDirective } from "./sds-step-buttons";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    SdsFormlyModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check, question, save }),
    RouterModule,
  ],
  declarations: [
    SdsStepComponent,
    SdsStepHeaderComponent,
    SdsStepFooterComponent,
    SdsStepper,
    SdsStepperNavDirective,
    SdsStepperNextDirective,
    SdsStepperPreviousDirective,
    SdsStepperSaveDirective,
    SdsStepperUSWDSNavDirective
  ],
  exports: [
    SdsStepComponent,
    SdsStepHeaderComponent,
    SdsStepFooterComponent,
    SdsStepper,
    SdsStepperNavDirective,
    SdsStepperNextDirective,
    SdsStepperPreviousDirective,
    SdsStepperSaveDirective,
    SdsStepperUSWDSNavDirective
  ]
})
export class SdsStepperModule {}
