import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectDescriptionComponent } from './formly-select-description.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySelectDescriptionComponent],
  exports: [FormlySelectDescriptionComponent],
  bootstrap: [FormlySelectDescriptionComponent],
})
export class FormlySelectDescriptionModule {}
