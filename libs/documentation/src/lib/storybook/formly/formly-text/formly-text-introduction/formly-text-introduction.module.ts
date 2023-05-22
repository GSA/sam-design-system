import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextIntroductionComponent } from './formly-text-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextIntroductionComponent],
  exports: [FormlyTextIntroductionComponent],
  bootstrap: [FormlyTextIntroductionComponent],
})
export class FormlyTextIntroductionModule {}
