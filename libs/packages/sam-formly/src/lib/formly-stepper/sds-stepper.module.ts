import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsIconModule } from "@gsa-sam/components";
import { SdsFormlyModule } from "../formly/formly.module";
import { SdsStepComponent, SdsStepFooterComponent, SdsStepHeaderComponent } from "./sds-step.component";
import { SdsStepperComponent } from "./sds-stepper.component";
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
    SdsStepperComponent,
    SdsStepComponent,
    SdsStepHeaderComponent,
    SdsStepFooterComponent,
  ],
  exports: [
    SdsStepperComponent,
    SdsStepComponent,
    SdsStepHeaderComponent,
    SdsStepFooterComponent,
  ]
})
export class SdsStepperModule {}
