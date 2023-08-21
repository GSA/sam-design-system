import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioHorizontalComponent } from './formly-radio-horizontal.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyRadioHorizontalComponent],
  bootstrap: [FormlyRadioHorizontalComponent],
  exports: [FormlyRadioHorizontalComponent],
})
export class FormlyRadioHorizontalModule {}
