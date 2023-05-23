import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFileinfoIntroductionComponent } from './formly-file-info-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFileinfoIntroductionComponent],
  exports: [FormlyFileinfoIntroductionComponent],
  bootstrap: [FormlyFileinfoIntroductionComponent],
})
export class FormlyFileinfoIntroductionModule {}
