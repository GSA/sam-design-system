import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperGroupIntroductionComponent } from './formly-wrapper-group-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperGroupIntroductionComponent],
  exports: [FormlyWrapperGroupIntroductionComponent],
  bootstrap: [FormlyWrapperGroupIntroductionComponent],
})
export class FormlyWrapperGroupIntroductionModule {}
