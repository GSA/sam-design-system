import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFileinputIntroductionComponent } from './formly-file-input-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFileinputIntroductionComponent],
  exports: [FormlyFileinputIntroductionComponent],
  bootstrap: [FormlyFileinputIntroductionComponent],
})
export class FormlyFileinputIntroductionModule {}
