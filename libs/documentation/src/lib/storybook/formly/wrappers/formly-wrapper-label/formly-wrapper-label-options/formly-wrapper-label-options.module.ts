import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperLabelOptionsComponent } from './formly-wrapper-label-options.component';
import { SdsStepArrowModule } from '@gsa-sam/components';
@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule,
    SdsStepArrowModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),],
  declarations: [FormlyWrapperLabelOptionsComponent],
  exports: [FormlyWrapperLabelOptionsComponent],
  bootstrap: [FormlyWrapperLabelOptionsComponent],
})
export class FormlyWrapperLabelOptionsModule {}
