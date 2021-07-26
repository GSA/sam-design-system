import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UswdsStepperComponent } from './uswds-stepper.component';
import { USWDSCustomStepperComponent } from './uswds-custom-stepper.component';
import { UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';
import { SdsStepperModule } from '@gsa-sam/sam-formly';



@NgModule({
  declarations: [UswdsStepperComponent, USWDSCustomStepperComponent],
  imports: [
    CommonModule,
    UsaStepIndicatorModule,
    SdsStepperModule,
  ],
  exports: [
    UswdsStepperComponent, 
    USWDSCustomStepperComponent
  ],
  bootstrap: [
    UswdsStepperComponent, 
    USWDSCustomStepperComponent
  ],
})
export class UswdsStepperModule { }
