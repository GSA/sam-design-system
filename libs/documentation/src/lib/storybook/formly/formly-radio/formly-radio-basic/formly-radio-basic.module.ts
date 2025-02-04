import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioBasicComponent } from './formly-radio-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyRadioBasicComponent],
  bootstrap: [FormlyRadioBasicComponent],
  exports: [FormlyRadioBasicComponent],
})
export class FormlyRadioBasicModule {}
