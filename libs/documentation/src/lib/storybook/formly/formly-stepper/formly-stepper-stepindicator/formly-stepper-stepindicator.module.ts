import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyStepperStepIndicatorComponent } from './formly-stepper-stepindicator.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyStepperStepIndicatorComponent],
  exports: [FormlyStepperStepIndicatorComponent],
  bootstrap: [FormlyStepperStepIndicatorComponent],
})
export class FormlyStepperStepIndicatorModule {}
