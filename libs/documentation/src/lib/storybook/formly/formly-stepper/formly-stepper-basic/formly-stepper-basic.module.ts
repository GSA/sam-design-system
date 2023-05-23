import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyStepperBasicComponent } from './formly-stepper-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyStepperBasicComponent],
  exports: [FormlyStepperBasicComponent],
  bootstrap: [FormlyStepperBasicComponent],
})
export class FormlyStepperBasicModule {}
