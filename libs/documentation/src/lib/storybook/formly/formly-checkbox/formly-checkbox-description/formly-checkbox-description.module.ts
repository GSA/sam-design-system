import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxDescriptionComponent } from './formly-checkbox-description.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyCheckboxDescriptionComponent],
  exports: [FormlyCheckboxDescriptionComponent],
  bootstrap: [FormlyCheckboxDescriptionComponent],
})
export class FormlyCheckboxDescriptionModule {}
