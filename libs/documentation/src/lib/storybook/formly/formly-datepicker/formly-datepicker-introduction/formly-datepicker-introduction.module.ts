import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDatepickerIntroductionComponent } from './formly-datepicker-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyDatepickerIntroductionComponent],
  exports: [FormlyDatepickerIntroductionComponent],
  bootstrap: [FormlyDatepickerIntroductionComponent],
})
export class FormlyDatepickerIntroductionModule {}
