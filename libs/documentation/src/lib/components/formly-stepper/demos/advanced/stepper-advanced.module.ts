import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OldStepperAdvancedDemoComponent } from './stepper-advanced.component';
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { AddSubawardeeDialogDemo, SubawardeeDemoComponent } from './subawardee.component';
import { FormlyModule } from '@ngx-formly/core';
import { CustomStepperDemo } from './custom-stepper.component';
import { SdsSideToolbarModule } from '@gsa-sam/components';
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
  imports: [
    CommonModule,
    SdsFormlyModule,
    SdsStepperModule,
    FormlyModule,
    IconModule,
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
    SdsSideToolbarModule,
  ],
  declarations: [OldStepperAdvancedDemoComponent, SubawardeeDemoComponent, AddSubawardeeDialogDemo, CustomStepperDemo],
  exports: [OldStepperAdvancedDemoComponent, SubawardeeDemoComponent, AddSubawardeeDialogDemo, CustomStepperDemo],
  bootstrap: [OldStepperAdvancedDemoComponent, SubawardeeDemoComponent, AddSubawardeeDialogDemo, CustomStepperDemo],
})
export class StepperAdvancedModule {}
