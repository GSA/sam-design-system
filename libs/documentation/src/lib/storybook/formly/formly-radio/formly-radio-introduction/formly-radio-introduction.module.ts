import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioIntroductionComponent } from './formly-radio-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyRadioIntroductionComponent],
  bootstrap: [FormlyRadioIntroductionComponent],
  exports: [FormlyRadioIntroductionComponent],
})
export class FormlyRadioIntroductionModule {}
