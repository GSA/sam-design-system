import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnevenStepsStepperComponent } from './uneven-steps-stepper.component';
import { UnevenStepsCustomStepperComponent } from './uneven-steps-custom-stepper.component';
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
  x,
} from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [UnevenStepsCustomStepperComponent, UnevenStepsStepperComponent],
  imports: [
    CommonModule,
    UsaStepIndicatorModule,
    SdsStepperModule,
    NgxBootstrapIconsModule.pick({
      chevronLeft,
      chevronRight,
      circle,
      slashCircleFill,
      checkCircleFill,
      question,
      save,
      x,
    }),
    IconModule,
  ],
  exports: [UnevenStepsCustomStepperComponent, UnevenStepsStepperComponent],
  bootstrap: [UnevenStepsCustomStepperComponent, UnevenStepsStepperComponent],
})
export class UnevenStepsStepperModule {}
