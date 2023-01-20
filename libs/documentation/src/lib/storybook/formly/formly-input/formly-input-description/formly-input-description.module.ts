import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputDescriptionComponent } from './formly-input-description.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyInputDescriptionComponent],
  exports: [FormlyInputDescriptionComponent],
  bootstrap: [FormlyInputDescriptionComponent],
})
export class FormlyInputDescriptionModule {}
