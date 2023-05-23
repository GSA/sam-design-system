import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperReadOnlyCustomTemplateComponent } from './formly-wrapper-read-only-custom-template.component';
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
  declarations: [FormlyWrapperReadOnlyCustomTemplateComponent],
  exports: [FormlyWrapperReadOnlyCustomTemplateComponent],
  bootstrap: [FormlyWrapperReadOnlyCustomTemplateComponent],
})
export class FormlyWrapperReadOnlyCustomTemplateModule {}
