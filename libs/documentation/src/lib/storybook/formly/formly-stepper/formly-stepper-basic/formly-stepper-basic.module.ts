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
  x,
} from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsStepArrowModule } from '@gsa-sam/components';
import { FormlyStepperBasicComponent } from './formly-stepper-basic.component';
import { USWDSCustomStepperComponent } from './uswds-custom-stepper.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  
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
 BrowserModule,
    HttpClientModule,
    FormsModule,
  ],

  declarations: [FormlyStepperBasicComponent, USWDSCustomStepperComponent],
 bootstrap: [FormlyStepperBasicComponent, USWDSCustomStepperComponent],
  exports: [FormlyStepperBasicComponent],
})
export class FormlyStepperBasicModule {}
