import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxBasicComponent } from './formly-checkbox-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyCheckboxBasicComponent],
  exports: [FormlyCheckboxBasicComponent],
  bootstrap: [FormlyCheckboxBasicComponent],
})
export class FormlyCheckboxBasicModule {}
