import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperReadOnlyOptionsComponent } from './formly-wrapper-read-only-options.component';
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
  declarations: [FormlyWrapperReadOnlyOptionsComponent],
  exports: [FormlyWrapperReadOnlyOptionsComponent],
  bootstrap: [FormlyWrapperReadOnlyOptionsComponent],
})
export class FormlyWrapperReadOnlyOptionsModule {}
