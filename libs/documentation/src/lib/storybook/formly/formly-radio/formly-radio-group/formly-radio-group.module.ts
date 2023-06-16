import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioGroupComponent } from './formly-radio-group.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyRadioGroupComponent],
  bootstrap: [FormlyRadioGroupComponent],
  exports: [FormlyRadioGroupComponent],
})
export class FormlyRadioGroupModule {}
