import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioAdvancedComponent } from './formly-radio-advanced.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyRadioAdvancedComponent],
  bootstrap: [FormlyRadioAdvancedComponent],
  exports: [FormlyRadioAdvancedComponent],
})
export class FormlyRadioAdvancedModule {}
