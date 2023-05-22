import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchIntroductionComponent } from './formly-search-introduction.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchIntroductionComponent],
  exports: [FormlySearchIntroductionComponent],
  bootstrap: [FormlySearchIntroductionComponent],
})
export class FormlySearchIntroductionModule {}
