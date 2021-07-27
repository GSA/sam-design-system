import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsIconModule } from "@gsa-sam/components";
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
import { SdsStepperNavDirective, SdsStepperNextDirective, SdsStepperPreviousDirective, SdsStepperSaveDirective } from "./sds-step-buttons";

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    SdsFormlyModule,
    SdsIconModule,
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
  ]
})
export class SdsStepperModule {}