import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UswdsStepperComponent } from './uswds-stepper.component';
import { USWDSCustomStepperComponent } from './uswds-custom-stepper.component';
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
import { SdsStepArrowModule } from '@gsa-sam/components';

@NgModule({
  declarations: [UswdsStepperComponent, USWDSCustomStepperComponent],
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
    SdsStepArrowModule,
  ],
  exports: [UswdsStepperComponent, USWDSCustomStepperComponent],
  bootstrap: [UswdsStepperComponent, USWDSCustomStepperComponent],
})
export class UswdsStepperModule {}
