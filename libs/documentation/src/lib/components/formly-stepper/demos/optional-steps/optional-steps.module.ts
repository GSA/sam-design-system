import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';
import { SdsStepperModule } from '@gsa-sam/sam-formly';
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
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { OptionalStepsComponent } from './optional-steps.component';
import { OptionalStepsCustomStepperComponent } from './optional-steps-custom-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OptionalStepsComponent, OptionalStepsCustomStepperComponent],
  imports: [
    CommonModule,
    UsaStepIndicatorModule,
    SdsStepperModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
    IconModule,
    ReactiveFormsModule
  ],
  exports: [
    OptionalStepsComponent,
    OptionalStepsCustomStepperComponent,
  ],
  bootstrap: [
    OptionalStepsComponent,
    OptionalStepsCustomStepperComponent,
  ],
})
export class OptionalStepsModule { }
