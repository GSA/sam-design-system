import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputPlaceholderComponent } from './formly-input-placeholder.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyInputPlaceholderComponent],
  exports: [FormlyInputPlaceholderComponent],
  bootstrap: [FormlyInputPlaceholderComponent],
})
export class FormlyInputPlaceholderModule {}
