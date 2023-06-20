import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperReadOnlyIntroductionComponent } from './formly-wrapper-read-only-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperReadOnlyIntroductionComponent],
  exports: [FormlyWrapperReadOnlyIntroductionComponent],
  bootstrap: [FormlyWrapperReadOnlyIntroductionComponent],
})
export class FormlyWrapperReadOnlyIntroductionModule {}
