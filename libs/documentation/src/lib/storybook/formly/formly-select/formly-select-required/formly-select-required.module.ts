import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectRequiredComponent } from './formly-select-required.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySelectRequiredComponent],
  exports: [FormlySelectRequiredComponent],
  bootstrap: [FormlySelectRequiredComponent],
})
export class FormlySelectRequiredModule {}
