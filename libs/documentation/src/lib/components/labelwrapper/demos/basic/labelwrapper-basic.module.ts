import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { LabelWrapperBasic } from './labelwrapper-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsStepArrowModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsStepArrowModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [LabelWrapperBasic],
  exports: [LabelWrapperBasic],
  bootstrap: [LabelWrapperBasic],
})
export class LabelWrapperBasicModule {}
